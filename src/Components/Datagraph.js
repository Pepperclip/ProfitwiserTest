import React, { useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Datagraph() {
    const mydata = [];

    const jsond = [{ "Time-Series-Day": { "2021-11-24": { "1. open": "116.1600", "2. high": "117.2700", "3. low": "116.0800", "4. close": "116.7300", "5. volume": "3220802" }, "2021-11-23": { "1. open": "116.7900", "2. high": "117.9400", "3. low": "116.0400", "4. close": "116.7900", "5. volume": "4914995" }, "2021-11-22": { "1. open": "116.0000", "2. high": "118.8100", "3. low": "115.1900", "4. close": "116.4700", "5. volume": "6417218" }, "2021-11-19": { "1. open": "116.4900", "2. high": "116.5600", "3. low": "115.2700", "4. close": "116.0500", "5. volume": "5384548" }, "2021-11-18": { "1. open": "118.3600", "2. high": "118.3600", "3. low": "116.3100", "4. close": "116.6600", "5. volume": "5047879" }, "2021-11-17": { "1. open": "118.3800", "2. high": "119.3300", "3. low": "117.7800", "4. close": "118.0600", "5. volume": "4043289" } } }]

    //Fetch MICROSOFT data
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=I0R8K64CG3EHARV6')
        .then(res => res.json()).then((items) => {
            console.log(items);
            mydata.push(items);

        }).catch(console.log)


    const apple = [
        {
            Name: "high",
            data: [3000, 2500, 2500, 250, 700, 200, 2000]
        },
        {
            Name: "low",
            data: [3000, 2500, 2500, 250, 700, 200, 2000]
        }];

    const apple_low = [200, 600, 250, 600, 250, 600, 250];

    console.log(apple.filter(item => item.Name === "low"))

    const options = {
        series: [{
            name: 'IBM',
            data: apple.filter(item => item.Name === "low")
        },
        {
            name: 'MSFT',
            data: [150, 450, 800, 90, 150, 250]
        },
        {
            name: 'Apple',
            data: [25, 3050, 100, 80, 300]
        },
        ]
    };

    return (
        <div>
            <h3>Chart</h3>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );

}
export default Datagraph;
