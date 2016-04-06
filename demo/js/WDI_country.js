// turn on social share by default
var socialShare = true;
// turn on rubbon by default
var githubButton = false;

function resizeBrowser(minWidth, minHeight){
    if(minWidth) $('#demo_Browser').width($(window).width()-minWidth);
    if(minHeight) $('#demo_Browser').height($(window).height()-minHeight);
};

var World_Countries = { 
  index_code: {},
  index_id: {},
  index_name: {},
  data: [
    {id:004, code:'Afghanistan', name:'Afghanistan'},
{id:008 ,code:'Albania', name:'Albania'},
{id:010 ,code:'Antarctica', name:'Antarctica'},
{id:012 ,code:'Algeria', name:'Algeria'},
{id:016 ,code:'American', name:'Samoa Samoa'},
{id:020 ,code:'Andorra', name:'Andorra'},
{id:024 ,code:'Angola', name:'Angola'},
{id:028 ,code:'Antigua', name:'and Barbuda Barbuda'},
{id:031 ,code:'Azerbaijan', name:'Azerbaijan'},
{id:032 ,code:'Argentina', name:'Argentina'},
{id:036 ,code:'Australia', name:'Australia'},
{id:040 ,code:'Austria', name:'Austria'},
{id:044 ,code:'Bahamas', name:'Bahamas'},
{id:048 ,code:'Bahrain', name:'Bahrain'},
{id:050 ,code:'Bangladesh', name:'Bangladesh'},
{id:051 ,code:'Armenia', name:'Armenia'},
{id:052 ,code:'Barbados', name:'Barbados'},
{id:056 ,code:'Belgium', name:'Belgium'},
{id:060 ,code:'Bermuda', name:'Bermuda'},
{id:064 ,code:'Bhutan', name:'Bhutan'},
{id:068 ,code:'Bolivi', name:', Plurinational State of of'},
{id:070 ,code:'Bosnia', name:'and Herzegovina Herzegovina'},
{id:072 ,code:'Botswana', name:'Botswana'},
{id:074 ,code:'Bouvet', name:'Island Island'},
{id:076 ,code:'Brazil', name:'Brazil'},
{id:084 ,code:'Belize', name:'Belize'},
{id:086 ,code:'British', name:'Indian Ocean Territory Territory'},
{id:090 ,code:'Solomon', name:'Islands Islands'},
{id:092 ,code:'Virgin', name:'Islands, British British'},
{id:096 ,code:'Brunei', name:'Darussalam Darussalam'},
{id:100 ,code:'Bulgaria', name:'Bulgaria'},
{id:104 ,code:'Myanmar', name:'Myanmar'},
{id:108 ,code:'Burundi', name:'Burundi'},
{id:112 ,code:'Belarus', name:'Belarus'},
{id:116 ,code:'Cambodia', name:'Cambodia'},
{id:120 ,code:'Cameroon', name:'Cameroon'},
{id:124 ,code:'Canada', name:'Canada'},
{id:132 ,code:'Cabo', name:'Verde Verde'},
{id:136 ,code:'Cayman', name:'Islands Islands'},
{id:140 ,code:'Central', name:'African Republic Republic'},
{id:144 ,code:'Sri', name:'Lanka Lanka'},
{id:148 ,code:'Chad', name:'Chad'},
{id:152 ,code:'Chile', name:'Chile'},
{id:156 ,code:'China', name:'China'},
{id:158 ,code:'Taiwa', name:', Province of China China'},
{id:162 ,code:'Christmas', name:'Island Island'},
{id:166 ,code:'Cocos', name:'(Keeling) Islands Islands'},
{id:170 ,code:'Colombia', name:'Colombia'},
{id:174 ,code:'Comoros', name:'Comoros'},
{id:175 ,code:'Mayotte', name:'Mayotte'},
{id:178 ,code:'Congo', name:'Congo'},
{id:180 ,code:'Cong', name:', the Democratic Republic of the the'},
{id:184 ,code:'Cook', name:'Islands Islands'},
{id:188 ,code:'Costa', name:'Rica Rica'},
{id:191 ,code:'Croatia', name:'Croatia'},
{id:192 ,code:'Cuba', name:'Cuba'},
{id:196 ,code:'Cyprus', name:'Cyprus'},
{id:203 ,code:'Czech', name:'Republic Republic'},
{id:204 ,code:'Benin', name:'Benin'},
{id:208 ,code:'Denmark', name:'Denmark'},
{id:212 ,code:'Dominica', name:'Dominica'},
{id:214 ,code:'Dominican', name:'Republic Republic'},
{id:218 ,code:'Ecuador', name:'Ecuador'},
{id:222 ,code:'El', name:'Salvador Salvador'},
{id:226 ,code:'Equatorial', name:'Guinea Guinea'},
{id:231 ,code:'Ethiopia', name:'Ethiopia'},
{id:232 ,code:'Eritrea', name:'Eritrea'},
{id:233 ,code:'Estonia', name:'Estonia'},
{id:234 ,code:'Faroe', name:'Islands Islands'},
{id:238 ,code:'Falkland', name:'Islands (Malvinas) Malvinas'},
{id:239 ,code:'South', name:'Georgia and the South Sandwich Islands Islands'},
{id:242 ,code:'Fiji', name:'Fiji'},
{id:246 ,code:'Finland', name:'Finland'},
{id:248 ,code:'Åland', name:'Islands Islands'},
{id:250 ,code:'France', name:'France'},
{id:254 ,code:'French', name:'Guiana Guiana'},
{id:258 ,code:'French', name:'Polynesia Polynesia'},
{id:260 ,code:'French', name:'Southern Territories Territories'},
{id:262 ,code:'Djibouti', name:'Djibouti'},
{id:266 ,code:'Gabon', name:'Gabon'},
{id:268 ,code:'Georgia', name:'Georgia'},
{id:270 ,code:'Gambia', name:'Gambia'},
{id:275 ,code:'Palestin', name:', State of of'},
{id:276 ,code:'Germany', name:'Germany'},
{id:288 ,code:'Ghana', name:'Ghana'},
{id:292 ,code:'Gibraltar', name:'Gibraltar'},
{id:296 ,code:'Kiribati', name:'Kiribati'},
{id:300 ,code:'Greece', name:'Greece'},
{id:304 ,code:'Greenland', name:'Greenland'},
{id:308 ,code:'Grenada', name:'Grenada'},
{id:312 ,code:'Guadeloupe', name:'Guadeloupe'},
{id:316 ,code:'Guam', name:'Guam'},
{id:320 ,code:'Guatemala', name:'Guatemala'},
{id:324 ,code:'Guinea', name:'Guinea'},
{id:328 ,code:'Guyana', name:'Guyana'},
{id:332 ,code:'Haiti', name:'Haiti'},
{id:334 ,code:'Heard', name:'Island and McDonald Islands Islands'},
{id:336 ,code:'Holy', name:'See (Vatican City State) State'},
{id:340 ,code:'Honduras', name:'Honduras'},
{id:344 ,code:'Hong', name:'Kong (Special Administrative Region of China) China'},
{id:348 ,code:'Hungary', name:'Hungary'},
{id:352 ,code:'Iceland', name:'Iceland'},
{id:356 ,code:'India', name:'India'},
{id:360 ,code:'Indonesia', name:'Indonesia'},
{id:364 ,code:'Ira', name:', Islamic Republic of of'},
{id:368 ,code:'Iraq', name:'Iraq'},
{id:372 ,code:'Ireland', name:'Ireland'},
{id:376 ,code:'Israel', name:'Israel'},
{id:380 ,code:'Italy', name:'Italy'},
{id:384 ,code:"Côte d'Ivoire", name:"Côte d'Ivoire"},
{id:388 ,code:'Jamaica', name:'Jamaica'},
{id:392 ,code:'Japan', name:'Japan'},
{id:398 ,code:'Kazakhstan', name:'Kazakhstan'},
{id:400 ,code:'Jordan', name:'Jordan'},
{id:404 ,code:'Kenya', name:'Kenya'},
{id:408 ,code:'Kore', name:" Democratic People's Republic of of"},
{id:410 ,code:'Korea', name:'Republic of of'},
{id:414 ,code:'Kuwait', name:'Kuwait'},
{id:417 ,code:'Kyrgyzstan', name:'Kyrgyzstan'},
{id:418 ,code:'Lao PDR', name:'Lao PDR'},
{id:422 ,code:'Lebanon', name:'Lebanon'},
{id:426 ,code:'Lesotho', name:'Lesotho'},
{id:428 ,code:'Latvia', name:'Latvia'},
{id:430 ,code:'Liberia', name:'Liberia'},
{id:434 ,code:'Libya', name:'Libya'},
{id:438 ,code:'Liechtenstein', name:'Liechtenstein'},
{id:440 ,code:'Lithuania', name:'Lithuania'},
{id:442 ,code:'Luxembourg', name:'Luxembourg'},
{id:446 ,code:'Macao', name:'(Special Administrative Region of China) China'},
{id:450 ,code:'Madagascar', name:'Madagascar'},
{id:454 ,code:'Malawi', name:'Malawi'},
{id:458 ,code:'Malaysia', name:'Malaysia'},
{id:462 ,code:'Maldives', name:'Maldives'},
{id:466 ,code:'Mali', name:'Mali'},
{id:470 ,code:'Malta', name:'Malta'},
{id:474 ,code:'Martinique', name:'Martinique'},
{id:478 ,code:'Mauritania', name:'Mauritania'},
{id:480 ,code:'Mauritius', name:'Mauritius'},
{id:484 ,code:'Mexico', name:'Mexico'},
{id:492 ,code:'Monaco', name:'Monaco'},
{id:496 ,code:'Mongolia', name:'Mongolia'},
{id:498 ,code:'Moldov', name:', Republic of of'},
{id:499 ,code:'Montenegro', name:'Montenegro'},
{id:500 ,code:'Montserrat', name:'Montserrat'},
{id:504 ,code:'Morocco', name:'Morocco'},
{id:508 ,code:'Mozambique', name:'Mozambique'},
{id:512 ,code:'Oman', name:'Oman'},
{id:516 ,code:'Namibia', name:'Namibia'},
{id:520 ,code:'Nauru', name:'Nauru'},
{id:524 ,code:'Nepal', name:'Nepal'},
{id:528 ,code:'Netherlands', name:'Netherlands'},
{id:531 ,code:'Curaçao', name:'Curaçao'},
{id:533 ,code:'Aruba', name:'Aruba'},
{id:534 ,code:'Sint', name:'Maarten (Dutch part) part'},
{id:535 ,code:'Bonair', name:', Sint Eustatius and Saba Saba'},
{id:540 ,code:'New', name:'Caledonia Caledonia'},
{id:548 ,code:'Vanuatu', name:'Vanuatu'},
{id:554 ,code:'New', name:'Zealand Zealand'},
{id:558 ,code:'Nicaragua', name:'Nicaragua'},
{id:562 ,code:'Niger', name:'Niger'},
{id:566 ,code:'Nigeria', name:'Nigeria'},
{id:570 ,code:'Niue', name:'Niue'},
{id:574 ,code:'Norfolk', name:'Island Island'},
{id:578 ,code:'Norway', name:'Norway'},
{id:580 ,code:'Northern', name:'Mariana Islands Islands'},
{id:581 ,code:'United', name:'States Minor Outlying Islands Islands'},
{id:583 ,code:'Micronesi', name:', Federated States of of'},
{id:584 ,code:'Marshall', name:'Islands Islands'},
{id:585 ,code:'Palau', name:'Palau'},
{id:586 ,code:'Pakistan', name:'Pakistan'},
{id:591 ,code:'Panama', name:'Panama'},
{id:598 ,code:'Papua', name:'New Guinea Guinea'},
{id:600 ,code:'Paraguay', name:'Paraguay'},
{id:604 ,code:'Peru', name:'Peru'},
{id:608 ,code:'Philippines', name:'Philippines'},
{id:612 ,code:'Pitcairn', name:'Pitcairn'},
{id:616 ,code:'Poland', name:'Poland'},
{id:620 ,code:'Portugal', name:'Portugal'},
{id:624 ,code:'Guine', name:'-Bissau Bissau'},
{id:626 ,code:'Timo', name:'-Leste Leste'},
{id:630 ,code:'Puerto', name:'Rico Rico'},
{id:634 ,code:'Qatar', name:'Qatar'},
{id:638 ,code:'Réunion', name:'Réunion'},
{id:642 ,code:'Romania', name:'Romania'},
{id:643 ,code:'Russia', name:'Federation Federation'},
{id:646 ,code:'Rwanda', name:'Rwanda'},
{id:652 ,code:'Saint', name:'Barthélemy Barthélemy'},
{id:654 ,code:'Saint', name:'Helena, Ascension and Tristan da Cunha Cunha'},
{id:659 ,code:'Saint', name:'Kitts and Nevis Nevis'},
{id:660 ,code:'Anguilla', name:'Anguilla'},
{id:662 ,code:'Saint', name:'Lucia Lucia'},
{id:663 ,code:'Saint', name:'Martin (French part) part'},
{id:666 ,code:'Saint', name:'Pierre and Miquelon Miquelon'},
{id:670 ,code:'Saint', name:'Vincent and the Grenadines Grenadines'},
{id:674 ,code:'San', name:'Marino Marino'},
{id:678 ,code:'Sao', name:'Tome and Principe Principe'},
{id:682 ,code:'Saudi', name:'Arabia Arabia'},
{id:686 ,code:'Senegal', name:'Senegal'},
{id:688 ,code:'Serbia', name:'Serbia'},
{id:690 ,code:'Seychelles', name:'Seychelles'},
{id:694 ,code:'Sierra', name:'Leone Leone'},
{id:702 ,code:'Singapore', name:'Singapore'},
{id:703 ,code:'Slovakia', name:'Slovakia'},
{id:704 ,code:'Viet', name:'Nam Nam'},
{id:705 ,code:'Slovenia', name:'Slovenia'},
{id:706 ,code:'Somalia', name:'Somalia'},
{id:710 ,code:'South', name:'Africa Africa'},
{id:716 ,code:'Zimbabwe', name:'Zimbabwe'},
{id:724 ,code:'Spain', name:'Spain'},
{id:728 ,code:'South', name:'Sudan Sudan'},
{id:729 ,code:'Sudan', name:'Sudan'},
{id:732 ,code:'Western', name:'Sahara Sahara'},
{id:740 ,code:'Suriname', name:'Suriname'},
{id:744 ,code:'Svalbard', name:'and Jan Mayen Mayen'},
{id:748 ,code:'Swaziland', name:'Swaziland'},
{id:752 ,code:'Sweden', name:'Sweden'},
{id:756 ,code:'Switzerland', name:'Switzerland'},
{id:760 ,code:'Syrian', name:'Arab Republic Republic'},
{id:762 ,code:'Tajikistan', name:'Tajikistan'},
{id:764 ,code:'Thailand', name:'Thailand'},
{id:768 ,code:'Togo', name:'Togo'},
{id:772 ,code:'Tokelau', name:'Tokelau'},
{id:776 ,code:'Tonga', name:'Tonga'},
{id:780 ,code:'Trinidad', name:'and Tobago Tobago'},
{id:784 ,code:'United', name:'Arab Emirates Emirates'},
{id:788 ,code:'Tunisia', name:'Tunisia'},
{id:792 ,code:'Turkey', name:'Turkey'},
{id:795 ,code:'Turkmenistan', name:'Turkmenistan'},
{id:796 ,code:'Turks', name:'and Caicos Islands Islands'},
{id:798 ,code:'Tuvalu', name:'Tuvalu'},
{id:800 ,code:'Uganda', name:'Uganda'},
{id:804 ,code:'Ukraine', name:'Ukraine'},
{id:807 ,code:'Macedoni', name:', the former Yugoslav Republic of of'},
{id:818 ,code:'Egypt', name:'Egypt'},
{id:826 ,code:'United', name:'Kingdom Kingdom'},
{id:831 ,code:'Guernsey', name:'Guernsey'},
{id:832 ,code:'Jersey', name:'Jersey'},
{id:833 ,code:'Isle', name:'of Man Man'},
{id:834 ,code:'Tanzani', name:', United Republic of of'},
{id:840 ,code:'United States', name:'United States of America America'},
{id:850 ,code:'Virgin', name:'Islands, U.S. S'},
{id:854 ,code:'Burkina', name:'Faso Faso'},
{id:858 ,code:'Uruguay', name:'Uruguay'},
{id:860 ,code:'Uzbekistan', name:'Uzbekistan'},
{id:862 ,code:'Venezuel', name:', Bolivarian Republic of of'},
{id:876 ,code:'Wallis', name:'and Futuna Futuna'},
{id:882 ,code:'Samoa', name:'Samoa'},
{id:887 ,code:'Yemen', name:'Yemen'},
{id:894 ,code:'Zambia', name:'Zambia'}
],
  loadGeo: function(){
    $.ajax({
      // Load state geometries
      url: 'data/world-110m.json',
      async: false,
      success: function(topojsonData){
        topojson.feature(topojsonData, topojsonData.objects.countries)
          .features.forEach(function(feature){
            var country = World_Countries.index_id[feature.id];
            if(country) country.geo = feature;
          });
      }
    });
  }
};

World_Countries.data.forEach(function(s){
  if(s.id) World_Countries.index_id[s.id] = s;
  if(s.code) World_Countries.index_code[s.code] = s;
  if(s.name) World_Countries.index_name[s.name] = s;
});

var getCountryName = function(v){
  var country = World_Countries.index_code[v];
  if(country) return country.name;
  return "Unknown: "+v;
};

var _demo = {
  Month: {
    0:  "January",
    1:  "February",
    2:  "March",
    3:  "April",
    4:  "May",
    5:  "June",
    6:  "July",
    7:  "August",
    8:  "September",
    9:  "October",
    10: "November",
    11: "December",
  },
  DayOfWeek: {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  },
  // Can be used for sorting
  DayOfWeek_id: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  Month_id: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
};

// Based on ISO_3166 codes
function getCountryName(v){
    switch(v){
        case 'AD': return "Andorra";
        case 'AE': return "United Arab Emirates";
        case 'AF': return "Afghanistan";
        case 'AG': return "Antigua and Barbuda";
        case 'AI': return "Anguilla";
        case 'AL': return "Albania";
        case 'AM': return "Armenia";
        case 'AO': return "Angola";
        case 'AQ': return "Antarctica";
        case 'AR': return "Argentina";
        case 'AS': return "American Samoa";
        case 'AT': return "Austria";
        case 'AU': return "Australia";
        case 'AW': return "Aruba";
        case 'AX': return "Åland Islands";
        case 'AZ': return "Azerbaijan";
        case 'BA': return "Bosnia and Herzegovina";
        case 'BB': return "Barbados";
        case 'BD': return "Bangladesh";
        case 'BE': return "Belgium";
        case 'BF': return "Burkina Faso";
        case 'BG': return "Bulgaria";
        case 'BH': return "Bahrain";
        case 'BI': return "Burundi";
        case 'BJ': return "Benin";
        case 'BL': return "Saint Barthélemy";
        case 'BM': return "Bermuda";
        case 'BN': return "Brunei Darussalam";
        case 'BO': return "Bolivia, Plurinational State of";
        case 'BQ': return "Bonaire, Sint Eustatius and Saba";
        case 'BR': return "Brazil";
        case 'BS': return "Bahamas";
        case 'BT': return "Bhutan";
        case 'BV': return "Bouvet Island";
        case 'BW': return "Botswana";
        case 'BY': return "Belarus";
        case 'BZ': return "Belize";
        case 'CA': return "Canada";
        case 'CC': return "Cocos (Keeling) Islands";
        case 'CD': return "Congo, the Democratic Republic of the";
        case 'CF': return "Central African Republic";
        case 'CG': return "Congo";
        case 'CH': return "Switzerland";
        case 'CI': return "Côte d'Ivoire";
        case 'CK': return "Cook Islands";
        case 'CL': return "Chile";
        case 'CM': return "Cameroon";
        case 'CN': return "China";
        case 'CO': return "Colombia";
        case 'CR': return "Costa Rica";
        case 'CU': return "Cuba";
        case 'CV': return "Cabo Verde";
        case 'CW': return "Curaçao";
        case 'CX': return "Christmas Island";
        case 'CY': return "Cyprus";
        case 'CZ': return "Czech Republic";
        case 'DE': return "Germany";
        case 'DJ': return "Djibouti";
        case 'DK': return "Denmark";
        case 'DM': return "Dominica";
        case 'DO': return "Dominican Republic";
        case 'DZ': return "Algeria";
        case 'EC': return "Ecuador";
        case 'EE': return "Estonia";
        case 'EG': return "Egypt";
        case 'EH': return "Western Sahara";
        case 'ER': return "Eritrea";
        case 'ES': return "Spain";
        case 'ET': return "Ethiopia";
        case 'FI': return "Finland";
        case 'FJ': return "Fiji";
        case 'FK': return "Falkland Islands (Malvinas)";
        case 'FM': return "Micronesia, Federated States of";
        case 'FO': return "Faroe Islands";
        case 'FR': return "France";
        case 'GA': return "Gabon";
        case 'GB': return "United Kingdom of Great Britain and Northern Ireland";
        case 'GD': return "Grenada";
        case 'GE': return "Georgia";
        case 'GF': return "French Guiana";
        case 'GG': return "Guernsey";
        case 'GH': return "Ghana";
        case 'GI': return "Gibraltar";
        case 'GL': return "Greenland";
        case 'GM': return "Gambia";
        case 'GN': return "Guinea";
        case 'GP': return "Guadeloupe";
        case 'GQ': return "Equatorial Guinea";
        case 'GR': return "Greece";
        case 'GS': return "South Georgia and the South Sandwich Islands";
        case 'GT': return "Guatemala";
        case 'GU': return "Guam";
        case 'GW': return "Guinea-Bissau";
        case 'GY': return "Guyana";
        case 'HK': return "Hong Kong";
        case 'HM': return "Heard Island and McDonald Islands";
        case 'HN': return "Honduras";
        case 'HR': return "Croatia";
        case 'HT': return "Haiti";
        case 'HU': return "Hungary";
        case 'ID': return "Indonesia";
        case 'IE': return "Ireland";
        case 'IL': return "Israel";
        case 'IM': return "Isle of Man";
        case 'IN': return "India";
        case 'IO': return "British Indian Ocean Territory";
        case 'IQ': return "Iraq";
        case 'IR': return "Iran, Islamic Republic of";
        case 'IS': return "Iceland";
        case 'IT': return "Italy";
        case 'JE': return "Jersey";
        case 'JM': return "Jamaica";
        case 'JO': return "Jordan";
        case 'JP': return "Japan";
        case 'KE': return "Kenya";
        case 'KG': return "Kyrgyzstan";
        case 'KH': return "Cambodia";
        case 'KI': return "Kiribati";
        case 'KM': return "Comoros";
        case 'KN': return "Saint Kitts and Nevis";
        case 'KP': return "Korea, Democratic People's Republic of";
        case 'KR': return "Korea, Republic of";
        case 'KW': return "Kuwait";
        case 'KY': return "Cayman Islands";
        case 'KZ': return "Kazakhstan";
        case 'LA': return "Lao People's Democratic Republic";
        case 'LB': return "Lebanon";
        case 'LC': return "Saint Lucia";
        case 'LI': return "Liechtenstein";
        case 'LK': return "Sri Lanka";
        case 'LR': return "Liberia";
        case 'LS': return "Lesotho";
        case 'LT': return "Lithuania";
        case 'LU': return "Luxembourg";
        case 'LV': return "Latvia";
        case 'LY': return "Libya";
        case 'MA': return "Morocco";
        case 'MC': return "Monaco";
        case 'MD': return "Moldova, Republic of";
        case 'ME': return "Montenegro";
        case 'MF': return "Saint Martin (French part)";
        case 'MG': return "Madagascar";
        case 'MH': return "Marshall Islands";
        case 'MK': return "Macedonia, the former Yugoslav Republic of";
        case 'ML': return "Mali";
        case 'MM': return "Myanmar";
        case 'MN': return "Mongolia";
        case 'MO': return "Macao";
        case 'MP': return "Northern Mariana Islands";
        case 'MQ': return "Martinique";
        case 'MR': return "Mauritania";
        case 'MS': return "Montserrat";
        case 'MT': return "Malta";
        case 'MU': return "Mauritius";
        case 'MV': return "Maldives";
        case 'MW': return "Malawi";
        case 'MX': return "Mexico";
        case 'MY': return "Malaysia";
        case 'MZ': return "Mozambique";
        case 'NA': return "Namibia";
        case 'NC': return "New Caledonia";
        case 'NE': return "Niger";
        case 'NF': return "Norfolk Island";
        case 'NG': return "Nigeria";
        case 'NI': return "Nicaragua";
        case 'NL': return "Netherlands";
        case 'NO': return "Norway";
        case 'NP': return "Nepal";
        case 'NR': return "Nauru";
        case 'NU': return "Niue";
        case 'NZ': return "New Zealand";
        case 'OM': return "Oman";
        case 'PA': return "Panama";
        case 'PE': return "Peru";
        case 'PF': return "French Polynesia";
        case 'PG': return "Papua New Guinea";
        case 'PH': return "Philippines";
        case 'PK': return "Pakistan";
        case 'PL': return "Poland";
        case 'PM': return "Saint Pierre and Miquelon";
        case 'PN': return "Pitcairn";
        case 'PR': return "Puerto Rico";
        case 'PS': return "Palestine, State of";
        case 'PT': return "Portugal";
        case 'PW': return "Palau";
        case 'PY': return "Paraguay";
        case 'QA': return "Qatar";
        case 'RE': return "Réunion";
        case 'RO': return "Romania";
        case 'RS': return "Serbia";
        case 'RU': return "Russian Federation";
        case 'RW': return "Rwanda";
        case 'SA': return "Saudi Arabia";
        case 'SB': return "Solomon Islands";
        case 'SC': return "Seychelles";
        case 'SD': return "Sudan";
        case 'SE': return "Sweden";
        case 'SG': return "Singapore";
        case 'SH': return "Saint Helena, Ascension and Tristan da Cunha";
        case 'SI': return "Slovenia";
        case 'SJ': return "Svalbard and Jan Mayen";
        case 'SK': return "Slovakia";
        case 'SL': return "Sierra Leone";
        case 'SM': return "San Marino";
        case 'SN': return "Senegal";
        case 'SO': return "Somalia";
        case 'SR': return "Suriname";
        case 'SS': return "South Sudan";
        case 'ST': return "Sao Tome and Principe";
        case 'SV': return "El Salvador";
        case 'SX': return "Sint Maarten (Dutch part)";
        case 'SY': return "Syrian Arab Republic";
        case 'SZ': return "Swaziland";
        case 'TC': return "Turks and Caicos Islands";
        case 'TD': return "Chad";
        case 'TF': return "French Southern Territories";
        case 'TG': return "Togo";
        case 'TH': return "Thailand";
        case 'TJ': return "Tajikistan";
        case 'TK': return "Tokelau";
        case 'TL': return "Timor-Leste";
        case 'TM': return "Turkmenistan";
        case 'TN': return "Tunisia";
        case 'TO': return "Tonga";
        case 'TR': return "Turkey";
        case 'TT': return "Trinidad and Tobago";
        case 'TV': return "Tuvalu";
        case 'TW': return "Taiwan, Province of China";
        case 'TZ': return "Tanzania, United Republic of";
        case 'UA': return "Ukraine";
        case 'UG': return "Uganda";
        case 'UM': return "United States Minor Outlying Islands";
        case 'US': return "United States of America";
        case 'UY': return "Uruguay";
        case 'UZ': return "Uzbekistan";
        case 'VA': return "Holy See";
        case 'VC': return "Saint Vincent and the Grenadines";
        case 'VE': return "Venezuela, Bolivarian Republic of";
        case 'VG': return "Virgin Islands, British";
        case 'VI': return "Virgin Islands, U.S.";
        case 'VN': return "Viet Nam";
        case 'VU': return "Vanuatu";
        case 'WF': return "Wallis and Futuna";
        case 'WS': return "Samoa";
        case 'YE': return "Yemen";
        case 'YT': return "Mayotte";
        case 'ZA': return "South Africa";
        case 'ZM': return "Zambia";
        case 'ZW': return "Zimbabwe";
        default  : return "Unkown: "+v;
    }
}

function writeCookie(name,value,days){
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
    }else{
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};

function readCookie(name){
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for(i=0;i < ca.length;i++) {
        c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length,c.length);
        }
    }
    return '';
};

var printPeopleIcons = function(){
    var str="";
    for(var i=0; i<this.id; i++) str+="<i class='fa fa-male'></i>";
    return str;
};

function noop(){};

// Logging
var isMobile = {
    Android    : function() { return navigator.userAgent.match(/Android/i); },
    BlackBerry : function() { return navigator.userAgent.match(/BlackBerry/i); },
    iOS        : function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera      : function() { return navigator.userAgent.match(/Opera Mini/i); },
    Windows    : function() { return navigator.userAgent.match(/IEMobile/i); },
    any        : function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
var logIf = {
    WindowSize : function(){ // minimum 950 x 500 (timeline is shown with 4 categories)
        // Using HTML document size (Device screen.width & screen.height is not important)
        var w=this.dom.width();
        var h=this.dom.height();
        return (w>950) && (h>500) /* && (w>h)*/;
    },
    Desktop : function(){ // skip: Android, Blackberry, iPhone, iPad, iPod, Opera Mini, IEMobile
        return isMobile.any()===null;
    },
    NoTouch : function(){ // skip browsers supporting touch events.
        return !Modernizr.touch; 
    },
    setSessionID : function(t){
        if(this.Check!==undefined) return;
        if(t!==undefined){
            this.dom = $(t);
        }
        document.getElementsByTagName("body")[0].onmousemove = null;
        this.sessionID_Cookie = readCookie('sessionId');
        if(this.sessionID_Cookie === '') {
            var ran  = window.event.clientX*Math.random();
            var ran2 = window.event.clientY*Math.random();
            this.sessionID_Cookie = Math.floor((ran+ran2)*10000000000000);
            writeCookie('sessionId', this.sessionID_Cookie, 365);
        } else {
            this.sessionID_Cookie = parseInt(this.sessionID_Cookie);
        }
        this.sessionID_Now = Math.floor(Math.random()*10000000000000);
        this.All();
    },
    host : function(){
        switch(document.location.hostname){
            case "localhost": return true;
            case "adilyalcin.github.io": return true;
            case "www.cs.umd.edu": return true;
            case "cs.umd.edu": return true;
            case "www.keshif.me": return true;
            case "keshif.me": return true;
        }
        return false;
    },
    All : function(){
        var tmp = this.Check;
        this.Check = 
            (typeof demoID === 'number') && 
            this.WindowSize() && 
            this.Desktop() && 
            this.NoTouch() && 
            this.host()===true && 
            (this.sessionID_Cookie!==null)
            ;
        if(this.Check===true && tmp === undefined) {
            this.loadTs = Date.now();
            sendLog(kshf.LOG.CONFIG,
                { height:this.dom.height(),width:this.dom.width(),agent:navigator.userAgent}, this.loadTs);
        }
        return this.Check;
    },
    dom: $(window),
    sessionID_Cookie: null,
    sessionID_Now: null,
    Check : undefined,
    loadTs: null,
};

var sendLog = function(actID, dt, ts){
    if(logIf.Check!==true) return;
    if(ts===undefined){ ts = Date.now()-logIf.loadTs; }
    var _dt = {
        'demoID': demoID,
        'actID' : actID,
        'ses_Cki' : logIf.sessionID_Cookie,
        'ses_Now': logIf.sessionID_Now,
        'ts'    : ts,
    };
    // custom data to be sent
    if(dt){ for (var key in dt) { _dt[key]=dt[key]; } }
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: true,
        jsonp: false,
        url: (document.location.hostname!=="localhost")?"http://keshiftracker.appspot.com":"http://localhost:9090/",
        data: _dt
    });
};;

$(document).ready(function(){
  window.onresize = function(){ kshf.handleResize(); };

    if(document.location.hostname!=="localhost"){
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        ga('create', 'UA-54042831-2', 'auto');
        ga('send', 'pageview');
    }
    var githubDemoRoot = "https://github.com/adilyalcin/Keshif/blob/master/demo/";
    var pageName = window.location.pathname.split("/");
    pageName = pageName[pageName.length-1];
    if(pageName.indexOf("html")===-1) pageName+=".html";

    if(socialShare===true){
      var body = d3.select("body");
      var demoHeader = body.append("div").attr("class","demoHeader");
      
      var keshif_logo = demoHeader.append("a").attr("class","keshif_logo").attr("href","http://www.keshif.me").attr("target","_blank");
      keshif_logo.append("img").attr("class","keshif_logo_img").attr("src","./img/logo.png");
      keshif_logo.append("span").attr("class","keshif_logo_content").html("<strong>Keshif</strong></br>Data Made Explorable");

      demoHeader.append("div").attr("class","addthis_sharing_toolbox");

      var openSource = demoHeader.append("div").attr("class","openSource")
        ;
      //openSource.append("span").attr("class","fa fa-github");
      openSource.append("iframe")
        .attr("src","http://ghbtns.com/github-btn.html?user=adilyalcin&repo=Keshif&type=star&count=false&size=small")
        .attr("frameborder",0)
        .attr("scrolling",0)
        .attr("width","52px")
        .attr("height","20px")
        .style("position","relative")
        .style("top","3px");
      var y = openSource.append("a").attr("class","openSourceLabel")
        .attr("target","_blank").attr("href",githubDemoRoot+pageName).attr("title","Get Code");
        //y.append("span").attr("class","sdsdsds").html("Get<br>Code");
          y.append("span").attr("class","fa fa-code");

      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-534742f736ae906e";
      s.async = "async";
      $("body").append(s);

      WebFontConfig = {
          google: { families: [ 'Montserrat:400,500,300,100,700:latin', ] }
      };
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    }

    d3.select("head").append("link")
        .attr("rel","icon")
        .attr("href","./img/favicon.png")
        .attr("type","image/png");


    if($("body").fancybox && false){

        var com_dom = d3.select("body").append("span").attr("class","comment_popup").attr("href",
            "https://docs.google.com/forms/d/1OohNaCzV42jHFtqTxVaci3CISGiR6znYTvEozFm2z7k/viewform?embedded=true");

        var com_dom_stack = com_dom.append("span").attr("class","fa-stack");
            com_dom_stack.append("i").attr("class","fa fa-stack-1x fa-comment");
            com_dom_stack.append("i").attr("class","fa fa-stack-1x fa-comment-o");
        com_dom.append("br");
        com_dom.append("span").attr("class","texttt").html("Share<br>your<br>feedback");

        $(".comment_popup").fancybox({
            type: 'iframe',
            width: 600,
            height: 300,
            closeBtn: true,
            iframe: { 
                preload: true
            }
        });
    }

    if(githubButton===true){
        var s = document.createElement("script");
        s.src = "https://buttons.github.io/buttons.js";
        s.id  = "github-bjs";
        s.async = "async";
        $("body").append(s);
    }
});



