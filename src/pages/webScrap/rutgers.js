const axios = require('axio')
const cheerio = require('cheerio')
const fs = require('fs')

const url = 'https://www.collegetransfer.net/Search/Search-for-Courses/Course-Search-Results?instnm=Rutgers+University-New+Brunswick&distance=5&language=en-US&perpage=50';

const rutgersCourses = {};

async function getHTML () {
    const { data: html } = await axios.get(url);
    return html;
}

getHTML().then((res) =>{
    const $ = cheerio.load(res);
    $('.student-course-search-results-list>ul').each((i, course) => {
        const title = $(course).find('.course-search-course-title a').text();
        const credits = $(course).find('.entitySubTitle course-search-course-credits strong').text();
    });
    fs.writeFile('courseData.json', JSON.stringify(rutgersCourses), (err) => {
        if (err) throw err
        console.log("file succesfully saved");
    })

})

