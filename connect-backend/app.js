const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Dashboard = require('./schema.js');


app.use(cors());

const MONGO_URL = "mongodb+srv://paramjeetnpradhan:Paramjeet.826@cluster01.wmcwsfi.mongodb.net/BrowseCofee";
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  })
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get('/newsData', async (req, res) => {
    try {
        const newsData = await Dashboard.find().sort({ intensity: -1 });

        //  const updateData = Object.entries(newsData);

        const extractedData = newsData.map(({ title, intensity, url, insight }) => ({ title, intensity, url, insight }));
        // console.log(extractedData);
        res.json(extractedData);
    } catch (error) {
        console.error('Error retrieving year counts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/pieData', async (req, res) => {
    try {

        let topicValues = [];

        Dashboard.find({}, { topic: 1, _id: 0 })
        .then(results => {
                topicValues = results.map(doc => doc.topic); // Extract published values
                // console.log(publishedValues);

                const topicCounts = {};

                topicValues.forEach(topicVal => {

                    if (topicCounts[topicVal]) {
                       
                        topicCounts[topicVal]++;
                    } else {
                        
                        topicCounts[topicVal] = 1;
                    }
                });
                    const key = "";
               delete topicCounts[key];
                const keyValueArray = Object.entries(topicCounts);

                keyValueArray.sort((a, b) => b[1] - a[1]);

                const sortedTopic = Object.fromEntries(keyValueArray);


                res.json(sortedTopic); // Output the array of published values
        })
        .catch(err => console.error('Error fetching published values:', err));

    } catch (error) {
        console.error('Error retrieving year counts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/barData', async (req, res) => {
    try {

        let sectorValues = [];

        Dashboard.find({}, { sector: 1, _id: 0 })
        .then(results => {
                sectorValues = results.map(doc => doc.sector); // Extract published values
                // console.log(publishedValues);

                const sectorCounts = {};

                sectorValues.forEach(sectVal => {

                    if (sectorCounts[sectVal]) {
                       
                        sectorCounts[sectVal]++;
                    } else {
                        
                        sectorCounts[sectVal] = 1;
                    }
                });


                const keyValueArray = Object.entries(sectorCounts);

                keyValueArray.sort((a, b) => b[1] - a[1]);

                const sortedSector = Object.fromEntries(keyValueArray);


                res.json(sortedSector); // Output the array of published values
        })
        .catch(err => console.error('Error fetching published values:', err));

    } catch (error) {
        console.error('Error retrieving year counts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/lineData', async (req, res) => {
    try {

        let publishedValues = [];

        Dashboard.find({}, { published: 1, _id: 0 })
        .then(results => {
                publishedValues = results.map(doc => doc.published); // Extract published values
                // console.log(publishedValues);

                const yearCounts = {};

                publishedValues.forEach(dateString => {
                    const year = new Date(dateString).getFullYear();

                    if (yearCounts[year]) {
                       
                        yearCounts[year]++;
                    } else {
                        
                        yearCounts[year] = 1;
                    }
                });


                res.json(yearCounts); // Output the array of published values
        })
        .catch(err => console.error('Error fetching published values:', err));

    } catch (error) {
        console.error('Error retrieving year counts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/radarData', async (req, res) => {
    try {
        const pestleCounts = await Dashboard.aggregate([
            {
              $match: {
                pestle: { $ne: '' } // Exclude documents where 'pestle' is null
              }
            },
            {
              $group: {
                _id: '$pestle',
                count: { $sum: 1 },
              },
            },
          ]).exec();

          const desiredIds = ['Political', 'Economic', 'Social', 'Technological', 'Lifestyles', 'Environmental'];

          const filteredPestleCounts = pestleCounts.filter(({ _id }) => desiredIds.includes(_id));

          const resultObject = filteredPestleCounts.reduce((acc, { _id, count }) => {
            acc[_id] = count;
            return acc;
          }, {});
          
          
          
    res.json(resultObject);

    } catch (error) {
      console.error('Error retrieving pestle counts:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(8080, () => {
    console.log('server running at 8080 port')
});
