const API_KEY = "&apikey=S8P66L8bOZUZaq7TME2QoF5NTK2AoAVp"
//const concertURL = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=300&startDateTime=2018-06-05T00:00:00Z&endDateTime=2018-06-12T00:00:00Z&size=120&apikey='
//const concertURL = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=US&size=200&apikey='
const concertURL = 'https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&size=10'
//classificationName=music&
//const concertURL = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&countryCode=US&size=20&classificationName=County&apikey=S8P66L8bOZUZaq7TME2QoF5NTK2AoAVp'
let movieList=$("#movieList")
var genrePick="Country"
var locationPick="Houston"
var artistPass=[]  
//testing
var genreCats = 
{     
    Alternative : "KnvZfZ7vAvv",
    Ballads : "KnvZfZ7vAve" ,
    Blues : "KnvZfZ7vAvd",
    Classical : "KnvZfZ7vAeJ",
    Country: "KnvZfZ7vAv6",
    Dance: "KnvZfZ7vAvF",
    Folk: "KnvZfZ7vAva",
    Rap: "KnvZfZ7vAv1",
    Holiday: "KnvZfZ7vAvJ",
    Jazz: "KnvZfZ7vAvE",
    Medieval: "KnvZfZ7vAvI",
    Metal: "KnvZfZ7vAvt",
    NewAge: "KnvZfZ7vAvn",
    Other: "KnvZfZ7vAvl",
    Pop: "KnvZfZ7vAev",
    RnB: "KnvZfZ7vAee",
    Reggae: "KnvZfZ7vAed",
    Religious: "KnvZfZ7vAe7",
    Rock: "KnvZfZ7vAeA",
    Undefined: "KnvZfZ7vAe6",
    World: "KnvZfZ7vAeF"
}

var locationRaw =
{
    USA : "200",
    Abilene : "212",
    Sweetwater : "212",
    Albany : "213",
    Schenectady : "213",
    Troy : "213",
    Albany : "214",
    Albuquerque : "215",
    Santa_Fe : "215",
    Alexandria : "216",
    Alpena : "217",
    Amarillo : "218",
    Anchorage : "219",
    Atlanta : "220",
    Augusta : "221",
    Austin : "222",
    Bakersfield : "223",
    Baltimore : "224",
    Bangor : "225",
    BatonRouge : "226",
    Beaumont : "227",
    PortArthur : "227",
    Bend : "228",
    Billings : "229",
    Biloxi : "230",
    Gulfport : "230" ,
    Binghamton : "231",
    Birmingham : "232",
    Bluefield : "233",
    Beckley : "233",
    Oak_Hill : "233",
    Boise : "234",
    Boston : "235",
    Bowling_Green : "236",
    Buffalo : "237",
    Burlington : "238",
    Plattsburgh : "238",
    Butte : "239",
    Bozeman : "239",
    Casper : "240",
    Riverton : "240",
    CedarRapids : "241",
    Waterloo : "241",
    Dubuque : "241",
    Champaign : "242",
    Springfield : "242",
    Decatur : "242",
    Charleston_SC : "243",
    Charleston : "244",
    Huntington : "244",
    Charlotte : "245",
    Charlottesville : "246",
    Chattanooga : "247",
    Cheyenne : "248",
    Scottsbluff : "248",
    Chicago : "249",
    Chico : "250",
    Redding : "250",
    Cincinnati : "251",
    Clarksburg : "252",
    Weston : "252",
    Cleveland : "253",
    Colorado_Springs : "254",
    Pueblo : "254",
    Columbia : "255",
    Jefferson_City : "255",
    Columbia_SC : "256",
    Columbus : "257",
    Tupelo : "257",
    West_Point : "257",
    Columbus_GA : "258",
    Columbus_OH : "259",
    Corpus_Christi : "260",
    Dallas : "261",
    Fort_Worth : "261",
    Davenport : "262",
    Rock_Island : "262",
    Moline : "262",
    Dayton : "263",
    Denver : "264",
    Des_Moines : "265",
    Ames : "265",
    Detroit : "266",
    Dothan : "267",
    Duluth  : "268",
    Superior : "268",
    El_Paso : "269",
    Elmira : "270",
    Erie : "271",
    Eugene : "272",
    Eureka : "273",
    Evansville : "274",
    Fairbanks : "275",
    Fargo : "276",
    Valley_City : "276",
    Flint : "277",
    Saginaw : "277",
    Bay_City : "277",
    Florence : "278",
    Myrtle_Beach : "278" ,
    Fort_Myers  : "279",
    Naples : "279",
    Fort_Smith : "280",
    Fayetteville : "280",
    Springdale : "280",
    Rogers : "280",
    For_Wayne : "281",
    Fresno : "282",
    Visalia : "282",
    Gainesville : "283",
    Glendive : "284",
    Grand_Junction : "285",
    Montrose : "285",
    Grand_Rapids : "286",
    Kalamazoo : "286",
    Battle_Creek : "286",
    Great_Falls : "287",
    Green_Bay : "288",
    Appleton : "288",
    Greensboro : "289",
    High_Point : "289",
    Winston : "289",
    Salem : "289",
    Greenville   : "290",
    New_Bern : "290",
    Washington : "290",
    Greenville : "291",
    Spartansburg : "291",
    Asheville : "291",
    Anderson : "291",
    Greenwood : "292",
    Greenville : "292",
    Harlingen : "293",
    Weslaco : "293",
    Brownsville : "293",
    McAllen : "293",
    Harrisburg : "294",
    Lancaster : "294",
    Lebanon : "294",
    York : "294",
    Harrisonburg : "295",
    Hartford : "296",
    New_Haven : "296",
    Hattiesburg : "297",
    Laurel : "297",
    Helena : "298",
    Honolulu : "299",
    Houston : "300",
    Huntsville : "301",
    Decatur : "301",
    Florence     : "301",
    Idaho_Falls : "302",
    Pocatello : "302",
    Indianapolis : "303",
    Jackson_MS : "304",
    Jackson_TN : "305",
    Jacksonville : "306",
    Johnstown : "307",
    Altoona : "307",
    Jonesboro : "308",
    Joplin : "309",
    Pittsburg : "309",
    Juneau : "310",
    Kansas_City : "311",
    Knoxville : "312",
    La_Crosse : "313",
    Eau_Claire : "313",
    Lafayette_IN : "314",
    Lafayette_LA : "315",
    Lake_Charles : "316",
    Lansing : "317",
    Laredo : "318",
    Las_Vegas : "319",
    Lexington : "320",
    Lima : "321",
    Lincoln : "322",
    Hastings  : "322",
    Kearney : "322",
    Little_Rock : "323",
    Pine_Bluff : "323",
    Los_Angeles : "324",
    Louisville : "325",
    Lubbock : "326",
    Macon : "327",
    Madison : "328",
    Mankato : "329",
    Marquette : "330",
    Medford : "331",
    Klamath_Falls : "331",
    Memphis : "332",
    Meridian : "333",
    Miami : "334",
    Fort_Lauderdale : "334",
    Milwaukee : "335",
    Minneapolis : "336",
    Saint_Paul : "336",
    Minot : "337",
    Bismarck : "337",
    Dickinson : "337",
    Missoula : "338",
    Mobile : "339",
    Pensacola : "339",
    Fort_Walton_Beach : "339",
    Monroe : "340",
    El_Dorado : "340",
    Monterey : "341",
    Salinas : "341",
    Montgomery : "342",
    Selma : "342",
    Nashville : "343",
    New_Orleans : "344",
    New_York : "345",
    Norfolk : "346",
    Portsmouth : "346",
    Newport_News : "346",
    North_Platte : "347",
    Odessa : "348",
    Midland : "348",
    Oklahoma_City : "349",
    Omaha : "350",
    Orlando : "351",
    Daytona_Beach : "351",
    Paducah : "353",
    Cape_Girardeau : "353",
    Harrisburg : "353",
    Mt_Vernon : "353",
    Palm_Springs : "354",
    Panama_City : "355",
    Parkersburg : "356",
    Peoria : "357",
    Bloomington : "357",
    Philadelphia : "358",
    Phoenix : "359",
    Pittsburgh : "360",
    Portland : "361",
    Auburn : "361",
    Portland_OR : "362",
    Presque_Isle : "363",
    Providence : "364",
    New_Bedford : "364",
    Quincy : "365",
    Hannibal : "365",
    Keokuk : "365",
    Raleigh : "366",
    Durham : "366",
    Fayetteville : "366",
    Rapid_City : "367",
    Reno : "368",
    Richmond : "369",
    Petersburg : "369",
    Roanoke : "370",
    Lynchburg : "370",
    Rochester : "371",
    Mason_City : "371",
    Austin : "371",
    Rochester_NY : "372",
    Rockford : "373",
    Sacramento : "374",
    Stockton  : "374",
    Modesto  : "374",
    Saint_Joseph  : "375",
    Saint_Louis  : "376",
    Salisbury  : "377",
    Salt_Lake_City  : "378",
    San_Angelo  : "379",
    San_Antonio  : "380",
    San_Diego  : "381",
    San_Francisco  : "382",
    Oakland  : "382",
    San_Jose  : "382",
    Santa_Barbara  : "383",
    Santa_Maria  : "383",
    San_Luis_Obispo  : "383",
    Savannah  : "384",
    Seattle  : "385",
    Tacoma  : "385",
    Sherman  : "386",
    Ada  : "386",
    Shreveport  : "387",
    Sioux_City  : "388",
    Sioux_Falls  : "389",
    Mitchell  : "389",
    South_Bend  : "390",
    Elkhart  : "390",
    Spokane  : "391",
    Springfield  : "392",
    Holyoke  : "392",
    Springfield_MO  : "393",
    Syracuse  : "394",
    Tallahassee  : "395",
    Tampa  : "396",
    Saint_Petersburg   : "396",
    Sarasota  : "396",
    Terre_Haute  : "397",
    Toledo  : "398",
    Topeka  : "399",
    Traverse_City  : "400",
    Cadillac  : "400" ,
    Tri_Cities   : "401",
    Tucson  : "402",
    Tulsa  : "403",
    Twin_Falls  : "404",
    Tyler  : "405",
    Longview  : "405",
    Lufkin  : "405",
    Nacogdoches  : "405",
    Utica  : "406",
    Victoria  : "407",
    Waco  : "408",
    Temple  : "408",
    Bryan  : "408",
    Washington_DC  : "409",
    Watertown  : "410",
    Wausau  : "411",
    Rhinelander  : "411",
    West_Palm_Beach   : "412",
    Fort_Pierce  : "412",
    Wheeling  : "413",
    Steubenville  : "413",
    Wichita  : "414",
    Hutchinson  : "414",
    Wichita_Falls  : "415",
    Lawton  : "415",
    Wilkes_Barre  : "416",
    Scranton  : "416",
    Wilmington  : "417",
    Yakima  : "418",
    Pasco  : "418",
    Richland  : "418",
    Kennewick  : "418",
    Youngstown  : "419",
    Yuma  : "420",
    El_Centro  : "420",
    Zanesville  : "421",
}
var dateRange ='&startDateTime=2018-06-05T00:00:00Z&endDateTime=2018-06-12T00:00:00Z'
var genre = genreCats[genrePick]
var genresearch = '&classificationId='+genre
console.log(genrePick+" is "+genre)
var city = '&dmaId='+locationPick


//let listBody=$("#listBody")
let rock=$("#rock") 
let hip_hop=$("#hip-hop") 
let country=$("#county") 
let world=$("#world") 
let rnb=$("#rnb") 

rock.click(function(){genrePick = 'Rock', buildGenre(), fetchAll()})
hip_hop.click(function(){genrePick = 'Rap', buildGenre(), fetchAll()})
country.click(function(){genrePick = 'Country', buildGenre(), fetchAll()})
world.click(function(){genrePick = 'World', buildGenre(),fetchAll()})
rnb.click(function(){genrePick = 'RnB', buildGenre(), fetchAll()})

function buildGenre(){
genre = genreCats[genrePick]
console.log (genre)
genresearch = '&classificationId='+genre
console.log(genrePick+" clicked")
//console.log(genresearch)
}

function buildLocation(){
    console.log(locationPick)
    var locationChoice =locationRaw[locationPick]
    city = '&dmaId='+locationChoice
    return city
}

function fetchAll()
{
    buildLocation()
    console.log(genresearch)
    console.log(city)
    console.log(dateRange)
    let searchstring = concertURL+genresearch+city+dateRange+API_KEY
    console.log(searchstring)
    fetch(searchstring)
    .then(function(response){return response.json()})
    .then(function(json)
    {   
        for (event in json["_embedded"])
            {
 //               console.log(event)
                console.log(json["_embedded"][event])
                return json["_embedded"][event]
                    
            }
        })
    .then(function(event){
        movieList.html("")
        for (i in event)
                    {
                    let genre = event[i].classifications[0].genre.name
                    let eventTitle=event[i].name
                    let venue=event[i]._embedded.venues[0].name
                    let eventDate=event[i].dates.start.localDate
                    let li = $("<li>").addClass("displayList");
                    let itemTitle= $("<title>").addClass("textForm")
                   li.append(eventTitle)
                   li.append(" at the "+venue)
                   li.append(" on "+eventDate)
                   li.append(" Genre:  "+genre)
                   movieList.append(li)
                    }
        })
    }

fetchAll()
 