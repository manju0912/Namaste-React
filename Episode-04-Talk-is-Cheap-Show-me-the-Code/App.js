import React from "react";
import ReactDOM from "react-dom/client";

// Header Component
const Header = () => {
    return(
        <div className="container flex navbar">
            <div className="logo">
                <img src={require("./food-logo.png")} alt="food-logo" />
            </div>
            <div className="nav">
                <ul className="flex">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Offers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="icons">
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    )
}

// REstauratant Data
const restaurant = [
    {
        "info": {
            "id": "88166",
            "name": "Nath'S Chinese",
            "cloudinaryImageId": "fsm15mqsuninmtb6twec",
            "locality": "Lakkhi Bagh",
            "areaName": "Khurbura",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Tandoor"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "88166",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2300
            },
            "parentId": "13608",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-05 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/naths-chinese-lakkhi-bagh-khurbura-dehradun-88166",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "74852",
            "name": "Doon Tripple Nine ( Ballupur)",
            "cloudinaryImageId": "p84jrjty8ktstt80fqgh",
            "locality": "Kaulagarh Road",
            "areaName": "Krishna Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Chinese"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "74852",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2300
            },
            "parentId": "74095",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-05 23:25:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                        "description": "OnlyOnSwiggy"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "OnlyOnSwiggy",
                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/doon-tripple-nine-ballupur-kaulagarh-road-krishna-nagar-dehradun-74852",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "69500",
            "name": "Rajdhani Chicken Point",
            "cloudinaryImageId": "jkkhgvwcjvpfheq8ftbv",
            "locality": "Gandhi Road",
            "areaName": "Race Course",
            "costForTwo": "₹275 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Continental"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "69500",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2300
            },
            "parentId": "13692",
            "avgRatingString": "3.8",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-05 23:01:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/rajdhani-chicken-point-gandhi-road-race-course-dehradun-69500",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "532213",
            "name": "Chilli'Z Restro",
            "cloudinaryImageId": "mzsuzzznrww2mpzwk27d",
            "locality": "Prem Nagar",
            "areaName": "Prem Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "532213",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2300
            },
            "parentId": "13645",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-05 23:50:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chilliz-restro-prem-nagar-dehradun-532213",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "371422",
            "name": "Handi punjab ki",
            "cloudinaryImageId": "vozwrqdkvfcfutehx4ld",
            "locality": "Rajpur Road",
            "areaName": "Hathibarkala Salwala",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Tandoor"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
                "restaurantId": "371422",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2300
            },
            "parentId": "93115",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-05 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/handi-punjab-ki-rajpur-road-hathibarkala-salwala-dehradun-371422",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "74373",
            "name": "Walk In Woods (Ballupur)",
            "cloudinaryImageId": "rx6kpst6wxyw9vvj7wo8",
            "locality": "General Mahadev Singh Road",
            "areaName": "Ballupur",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "Biryani"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "74373",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "359025",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3.8,
                "serviceability": "SERVICEABLE",
                "slaString": "22 mins",
                "lastMileTravelString": "3.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-06 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/walk-in-woods-ballupur-general-mahadev-singh-road-ballupur-dehradun-74373",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "84989",
            "name": "Lemon Chilli Pure Veg Family Restaurant",
            "cloudinaryImageId": "hcmvabxp9c31a7zq0dgj",
            "locality": "Clock Tower",
            "areaName": "PrinceChowk",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Chinese"
            ],
            "avgRating": 3.8,
            "veg": true,
            "feeDetails": {
                "restaurantId": "84989",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2300
            },
            "parentId": "8256",
            "avgRatingString": "3.8",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 17,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "17 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-05 23:55:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/lemon-chilli-pure-veg-family-restaurant-clock-tower-princechowk-dehradun-84989",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "209248",
            "name": "Tapri - The Teafe",
            "cloudinaryImageId": "yiaxur0msv965laoljwf",
            "locality": "Rajpur Road",
            "areaName": "Hathibarkala Salwala",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Continental",
                "Indian",
                "Italian",
                "Italian-American"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "209248",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2300
            },
            "parentId": "201145",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-06 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/tapri-the-teafe-rajpur-road-hathibarkala-salwala-dehradun-209248",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "240107",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Rajpur Road",
            "areaName": "Karanpur",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "240107",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2300
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2300
            },
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "18 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-06 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-rajpur-road-karanpur-dehradun-240107",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "100554",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Rajpur Road",
            "areaName": "Rajpur",
            "costForTwo": "₹275 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "100554",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3000
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3000
            },
            "parentId": "547",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 2,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "2.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-05 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹179"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-road-rajpur-dehradun-100554",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "69061",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "locality": "Rajpur Road",
            "areaName": "Race Course",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "69061",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 2500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 2500
            },
            "parentId": "2",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 15,
                "lastMileTravel": 0.5,
                "serviceability": "SERVICEABLE",
                "slaString": "15 mins",
                "lastMileTravelString": "0.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-06 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-rajpur-road-race-course-dehradun-69061",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "364442",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Bank Colony",
            "areaName": "Jogiwala",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "364442",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3500
            },
            "parentId": "721",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4.9,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "4.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-06 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-bank-colony-jogiwala-dehradun-364442",
            "type": "WEBLINK"
        }
    }
]

// Restaurant Card Component

const RestaurantCard = (props) => {
    const {resData} = props;
    
    const {cloudinaryImageId, name, avgRating, cuisines, areaName} = resData?.info;

    return(
        <div className="card-container">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId } />
            <div className="card-content">
                <h4>{name}</h4>
                <h4><i class="fa-solid fa-star"></i> {avgRating}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

// Restaurant List Component

const RestaurantList = () => {
    return(
        <div className="restaurant-list">
            <RestaurantCard />
        </div>
    )
}


// Body Component
const Body = () => {
    return(
        <div className="body-container">
            <div className="searchbar flex">
                <form>
                    <input type="text" id="search" name="search" placeholder="Search for cuisines, restaurants..."></input>
                    <button className="search-icon">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
            <div className="rest-list flex">
                {
                    restaurant.map((info) => (<RestaurantCard resData={info} />))
                }
            </div>
            
        </div>
    )
}

// Footer Component
const Footer = () => {
    return(
        <div className="container footer">
            <p>Copyright 2023 All rights reserved. This UI is build just for learning purpose.</p>
        </div>
    )
}









const AppLayout = () => {
    return(
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);