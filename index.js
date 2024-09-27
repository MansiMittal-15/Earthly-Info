require("./index.css");
var $kj8Te$reactjsxruntime = require("react/jsx-runtime");
var $kj8Te$reactdomclient = require("react-dom/client");
var $kj8Te$reactrouterdom = require("react-router-dom");
var $kj8Te$react = require("react");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}





var $50f4b328bd4dd30a$exports = {};
$50f4b328bd4dd30a$exports = new URL("moon.e71408da.png", "file:" + __filename).toString();


var $cd030f2d842f8ec3$exports = {};
$cd030f2d842f8ec3$exports = new URL("sun1.6485393e.png", "file:" + __filename).toString();


const $c1a9342ca7e17576$var$Header = ({ changeMode: changeMode, mode: mode, bgc: bgc, color: color })=>{
    return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("header", {
            className: "header",
            style: {
                backgroundColor: bgc,
                color: color
            },
            children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                className: "header-cont",
                children: [
                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("h1", {
                        children: "Where in the World?"
                    }),
                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                        className: "header-content",
                        onClick: changeMode,
                        children: [
                            mode ? /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("img", {
                                src: (0, (/*@__PURE__*/$parcel$interopDefault($cd030f2d842f8ec3$exports))),
                                alt: "Sun",
                                className: "sunImage"
                            }) : /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("img", {
                                src: (0, (/*@__PURE__*/$parcel$interopDefault($50f4b328bd4dd30a$exports))),
                                alt: "Moon",
                                className: "moonImage"
                            }),
                            mode ? /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {
                                children: "Light Mode"
                            }) : /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {
                                children: "Dark Mode"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
var $c1a9342ca7e17576$export$2e2bcd8739ae039 = $c1a9342ca7e17576$var$Header;



const $2bd1ec3fc693104f$var$App = ({ modeHandler: modeHandler, mode: mode, bgc: bgc, color: color })=>{
    return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)((0, $kj8Te$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $c1a9342ca7e17576$export$2e2bcd8739ae039), {
                changeMode: modeHandler,
                mode: mode,
                bgc: bgc,
                color: color
            }),
            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactrouterdom.Outlet), {})
        ]
    });
};
var $2bd1ec3fc693104f$export$2e2bcd8739ae039 = $2bd1ec3fc693104f$var$App;






const $9ba41b2001c4c89a$var$Dropdown = ({ setSearchValue: setSearchValue })=>{
    return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("select", {
            id: "dropdown",
            onChange: (event)=>setSearchValue(event.target.value),
            children: [
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("option", {
                    value: "",
                    hidden: true,
                    children: "Filter by Region"
                }),
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("option", {
                    value: "Africa",
                    children: "Africa"
                }),
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("option", {
                    value: "Americas",
                    children: "Americas"
                }),
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("option", {
                    value: "Asia",
                    children: "Asia"
                }),
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("option", {
                    value: "Europe",
                    children: "Europe"
                }),
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("option", {
                    value: "Oceania",
                    children: "Oceania"
                }),
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("option", {
                    value: "Antarctic",
                    children: "Antarctic"
                })
            ]
        })
    });
};
var $9ba41b2001c4c89a$export$2e2bcd8739ae039 = $9ba41b2001c4c89a$var$Dropdown;



var $7fe4d7749628bf6f$exports = {};
$7fe4d7749628bf6f$exports = new URL("magnifying-glass.c2ab0676.png", "file:" + __filename).toString();


const $18c041a159888632$var$SearchBar = ({ setSearchValue: setSearchValue })=>{
    return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
            className: "search-bar-div",
            children: [
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("img", {
                    src: (0, (/*@__PURE__*/$parcel$interopDefault($7fe4d7749628bf6f$exports))),
                    alt: "Magnifier",
                    className: "magnifying-glass"
                }),
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("input", {
                    type: "search",
                    placeholder: "Search for a Country...",
                    className: "search-bar-input",
                    onChange: (event)=>setSearchValue(event.target.value)
                })
            ]
        })
    });
};
var $18c041a159888632$export$2e2bcd8739ae039 = $18c041a159888632$var$SearchBar;






const $2b933f68bcf0dc3a$var$CountryCard = ({ countryName: countryName, population: population, region: region, capital: capital, flag: flag, cardColor: cardColor, color: color, data: data })=>{
    return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactrouterdom.Link), {
            to: `/${countryName}`,
            state: data,
            children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                className: "country-card",
                style: {
                    backgroundColor: cardColor,
                    color: color
                },
                children: [
                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("img", {
                        src: flag,
                        alt: "Country Image"
                    }),
                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                        className: "country-details",
                        children: [
                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("h2", {
                                children: countryName
                            }),
                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                children: "Population: "
                                            }),
                                            population.toLocaleString("en-IN")
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                children: "Region: "
                                            }),
                                            region
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                        children: [
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                children: "Capital: "
                                            }),
                                            capital
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
var $2b933f68bcf0dc3a$export$2e2bcd8739ae039 = $2b933f68bcf0dc3a$var$CountryCard;




const $9bbf85132b27ad7c$var$CountryListShimmer = ()=>{
    return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("main", {
            className: "shimmer-main",
            children: Array.from({
                length: 15
            }).map((val, index)=>{
                return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                    className: "shimmer-card",
                    children: [
                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("div", {
                            className: "shimmer-image"
                        }),
                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                            className: "shimmer-details",
                            children: [
                                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("h3", {}),
                                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {}),
                                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {}),
                                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {})
                            ]
                        })
                    ]
                }, index);
            })
        })
    });
};
var $9bbf85132b27ad7c$export$2e2bcd8739ae039 = $9bbf85132b27ad7c$var$CountryListShimmer;


const $b30db45703524afc$var$CountriesList = ({ cardColor: cardColor, color: color, value: value })=>{
    const [countriesData, setCountriesData] = (0, $kj8Te$react.useState)([]);
    (0, $kj8Te$react.useEffect)(()=>{
        fetch("https://restcountries.com/v3.1/all").then((res)=>res.json()).then((data)=>{
            setCountriesData(data);
        });
    }, []);
    return countriesData.length === 0 ? /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $9bbf85132b27ad7c$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("div", {
            className: "countries-list-container",
            children: countriesData.map((country)=>{
                return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $2b933f68bcf0dc3a$export$2e2bcd8739ae039), {
                    countryName: country.name.common,
                    population: country.population,
                    region: country.region,
                    capital: country.capital,
                    flag: country.flags.png,
                    cardColor: cardColor,
                    color: color,
                    data: country
                }, country.flags.png);
            }).filter((elem)=>{
                return elem.props.countryName.toLowerCase().includes(value.toLowerCase()) || elem.props.region.toLowerCase().includes(value.toLowerCase());
            })
        })
    });
};
var $b30db45703524afc$export$2e2bcd8739ae039 = $b30db45703524afc$var$CountriesList;


const $920ebce455d66a25$var$Home = ({ mainColor: mainColor, cardColor: cardColor, color: color })=>{
    const [searchValue, setSearchValue] = (0, $kj8Te$react.useState)("");
    return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("main", {
            style: {
                backgroundColor: mainColor
            },
            children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                className: "main-container-home",
                children: [
                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                        className: "searchBar-dropdown",
                        children: [
                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $18c041a159888632$export$2e2bcd8739ae039), {
                                setSearchValue: setSearchValue
                            }),
                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $9ba41b2001c4c89a$export$2e2bcd8739ae039), {
                                setSearchValue: setSearchValue
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $b30db45703524afc$export$2e2bcd8739ae039), {
                        cardColor: cardColor,
                        color: color,
                        value: searchValue
                    })
                ]
            })
        })
    });
};
var $920ebce455d66a25$export$2e2bcd8739ae039 = $920ebce455d66a25$var$Home;





var $7837b8d95d1d9a12$exports = {};
$7837b8d95d1d9a12$exports = new URL("leftArrow.24e49998.png", "file:" + __filename).toString();


var $6a438f554fcc1528$exports = {};
$6a438f554fcc1528$exports = new URL("whiteLeftArrow.ddefa3da.png", "file:" + __filename).toString();






const $452810a641dab710$var$ErrorPage = ({ mainColor: mainColor, color: color })=>{
    const error = (0, $kj8Te$reactrouterdom.useRouteError)();
    return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("div", {
        className: "error-page",
        style: {
            backgroundColor: mainColor,
            color: color
        },
        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("h1", {
            children: "Page Not Found"
        })
    });
};
var $452810a641dab710$export$2e2bcd8739ae039 = $452810a641dab710$var$ErrorPage;




const $65604430fe9802c7$var$CountryDetailShimmer = ()=>{
    return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
            className: "country-detail-card-shimmer",
            children: [
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("div", {
                    className: "button"
                }),
                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                    className: "country-details-container-shimmer",
                    children: [
                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("div", {
                            className: "image"
                        }),
                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                            className: "country-details-shimmer",
                            children: [
                                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("h1", {}),
                                /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                                    className: "details-shimmer",
                                    children: [
                                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {}),
                                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {}),
                                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {}),
                                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {}),
                                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {}),
                                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {}),
                                        /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("p", {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
var $65604430fe9802c7$export$2e2bcd8739ae039 = $65604430fe9802c7$var$CountryDetailShimmer;


const $87d64bc331096870$var$CardDetail = ({ mainColor: mainColor, color: color, mode: mode })=>{
    // const countryName = new URLSearchParams(location.search).get("name");
    const params = (0, $kj8Te$reactrouterdom.useParams)();
    const countryName = params.country;
    const [countryData, setCountryData] = (0, $kj8Te$react.useState)(null);
    const [notFound, setNotFound] = (0, $kj8Te$react.useState)(false);
    const { state: state } = (0, $kj8Te$reactrouterdom.useLocation)();
    function updateCountryData(data) {
        setCountryData({
            name: data.name.common,
            population: data.population.toLocaleString("en-IN"),
            flag: data.flags.png,
            capital: data.capital?.join(", "),
            region: data.region,
            nativeName: data.name.nativeName ? Object.values(data.name.nativeName).map((nativeName)=>nativeName.official).join(", ") : "",
            subRegion: data.subregion,
            currencies: data.currencies ? Object.values(data.currencies).map((currency)=>currency.name).join(", ") : "",
            languages: data.languages ? Object.values(data.languages).join(", ") : "",
            topLevelDomain: data.tld.join(", "),
            timeZone: data.timezones.join(", "),
            borders: []
        });
        if (!data.borders) data.borders = [];
        Promise.all(data.borders.map((border)=>{
            return fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res)=>res.json()).then(([borderCountry])=>borderCountry.name.common);
        })).then((borders)=>{
            setTimeout(()=>{
                setCountryData((prevState)=>({
                        ...prevState,
                        borders: borders
                    }));
            }, 100);
        });
    }
    (0, $kj8Te$react.useEffect)(()=>{
        if (state) {
            updateCountryData(state);
            return;
        }
        fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`).then((res)=>res.json()).then(([data])=>{
            updateCountryData(data);
        }).catch((err)=>{
            setNotFound(true);
        });
    }, [
        countryName
    ]);
    if (notFound) return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $452810a641dab710$export$2e2bcd8739ae039), {
        mainColor: mainColor,
        color: color
    });
    return countryData === null ? /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $65604430fe9802c7$export$2e2bcd8739ae039), {}) : /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactjsxruntime.Fragment), {
        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("div", {
            className: "countryDetailCard",
            style: {
                backgroundColor: mainColor,
                color: color
            },
            children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                className: "countryDetailCard-container",
                children: [
                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("span", {
                        children: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("button", {
                            className: "backBtn",
                            onClick: ()=>{
                                history.back();
                            },
                            style: {
                                color: color,
                                backgroundColor: mainColor
                            },
                            children: [
                                " ",
                                mode ? /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("img", {
                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($7837b8d95d1d9a12$exports))),
                                    alt: "left-arrow",
                                    id: "leftArrowImg",
                                    style: {
                                        width: "15px",
                                        color: color,
                                        display: "flex"
                                    }
                                }) : /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("img", {
                                    src: (0, (/*@__PURE__*/$parcel$interopDefault($6a438f554fcc1528$exports))),
                                    alt: "left-arrow",
                                    id: "leftArrowImg",
                                    style: {
                                        width: "21px",
                                        color: color,
                                        display: "flex"
                                    }
                                }),
                                "\xa0 Back"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                        className: "countryDetailsContainer",
                        children: [
                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("img", {
                                src: countryData.flag,
                                alt: countryName + " Flag"
                            }),
                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                                className: "countryDetails",
                                children: [
                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("h1", {
                                        children: countryData.name
                                    }),
                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("div", {
                                        className: "details",
                                        children: [
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                        children: " Native Name:- "
                                                    }),
                                                    " \xa0",
                                                    " ",
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("span", {
                                                        children: [
                                                            countryData.nativeName,
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                        children: " Population:-"
                                                    }),
                                                    "\xa0",
                                                    " ",
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("span", {
                                                        children: countryData.population
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                        children: " Region:- "
                                                    }),
                                                    "\xa0 ",
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("span", {
                                                        children: countryData.region
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                        children: "Sub Region:-"
                                                    }),
                                                    "\xa0 ",
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("span", {
                                                        children: countryData.subRegion
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                        children: "Capital:-"
                                                    }),
                                                    " \xa0",
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("span", {
                                                        children: countryData.capital
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                        children: "Top Level Domains:- "
                                                    }),
                                                    " \xa0",
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("span", {
                                                        children: [
                                                            " ",
                                                            countryData.topLevelDomain,
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                        children: "Currencies:-"
                                                    }),
                                                    " \xa0",
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("span", {
                                                        children: [
                                                            " ",
                                                            countryData.currencies,
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                        children: "Languages:-"
                                                    }),
                                                    "\xa0 ",
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("span", {
                                                        children: [
                                                            countryData.languages,
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                                children: [
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                        children: "Time Zones:-"
                                                    }),
                                                    "\xa0 ",
                                                    /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("span", {
                                                        children: [
                                                            countryData.timeZone,
                                                            " "
                                                        ]
                                                    }),
                                                    " "
                                                ]
                                            })
                                        ]
                                    }),
                                    countryData.borders.length !== 0 && /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsxs)("p", {
                                        style: {
                                            padding: "6px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)("b", {
                                                children: "Border Countries:-"
                                            }),
                                            " \xa0",
                                            countryData.borders.map((border)=>/*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactrouterdom.Link), {
                                                    className: "border-link",
                                                    style: {
                                                        backgroundColor: mainColor,
                                                        color: color
                                                    },
                                                    to: `/${border}`,
                                                    children: border
                                                }, border))
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
var $87d64bc331096870$export$2e2bcd8739ae039 = $87d64bc331096870$var$CardDetail;



function $366f189997649a4c$var$MainApp() {
    const [mode, setMode] = (0, $kj8Te$react.useState)(true);
    const [bgc, setBgc] = (0, $kj8Te$react.useState)("skyblue");
    const [color, setColor] = (0, $kj8Te$react.useState)("black");
    const [cardColor, setCardColor] = (0, $kj8Te$react.useState)("white");
    const [mainColor, setMainColor] = (0, $kj8Te$react.useState)("white");
    const modeHandler = ()=>{
        if (mode === true) {
            setMode(false);
            setBgc("rgb(10, 10, 37)");
            setColor("white");
            setCardColor("rgb(10, 10, 37)");
            setMainColor("#0f0a1ddb");
        } else {
            setMode(true);
            setBgc("skyblue");
            setColor("black");
            setCardColor("white");
            setMainColor("white");
        }
    };
    const router = (0, $kj8Te$reactrouterdom.createBrowserRouter)([
        {
            path: "/",
            element: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $2bd1ec3fc693104f$export$2e2bcd8739ae039), {
                modeHandler: modeHandler,
                bgc: bgc,
                color: color,
                mode: mode
            }),
            children: [
                {
                    path: "/",
                    errorElement: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $452810a641dab710$export$2e2bcd8739ae039), {
                        mainColor: mainColor,
                        color: color
                    }),
                    element: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $920ebce455d66a25$export$2e2bcd8739ae039), {
                        mainColor: mainColor,
                        cardColor: cardColor,
                        color: color
                    })
                },
                {
                    path: "/:country",
                    element: /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $87d64bc331096870$export$2e2bcd8739ae039), {
                        mainColor: mainColor,
                        color: color,
                        mode: mode
                    })
                }
            ]
        }
    ]);
    return /*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)((0, $kj8Te$reactrouterdom.RouterProvider), {
        router: router
    });
}
const $366f189997649a4c$var$root = (0, ($parcel$interopDefault($kj8Te$reactdomclient))).createRoot(document.querySelector("#root"));
$366f189997649a4c$var$root.render(/*#__PURE__*/ (0, $kj8Te$reactjsxruntime.jsx)($366f189997649a4c$var$MainApp, {}));


//# sourceMappingURL=index.js.map
