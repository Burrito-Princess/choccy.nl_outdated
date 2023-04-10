


apod();
async function apod(){
const apodapi = await fetch('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?api_key=y2dbCmlSM2IlvrXCaKX1KOd7YhIXCsyc8tTcNY2j', {
method: "GET",
withCredentials: true,
headers: {
    "Cache-Control": "no-cache",
}       
});

    let apod = await apodapi.json();
    console.log(apod);
}

