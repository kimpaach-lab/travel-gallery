// Travel Gallery Data
// Structure: country > region (state/province) > location (city)

const travelData = [

  // ── MEXICO ──────────────────────────────────────────────────────
  {
    id: "mexico", name: "Mexico", flag: "🇲🇽",
    continentId: "north-america",
    coverPhoto: "photos/mexico/cover.jpg",
    regions: [
      {
        id: "ciudad-de-mexico", name: "Ciudad de México",
        subtitle: "Federal Entity",
        coverPhoto: "photos/mexico/ciudad-de-mexico/cover.jpg",
        locations: [
          {
            id: "ciudad-de-mexico", name: "Ciudad de México",
            description: "A sprawling, vibrant capital full of culture, history, and incredible food.",
            coverPhoto: "photos/mexico/ciudad-de-mexico/ciudad-de-mexico/cover.jpg",
            photos: files("photos/mexico/ciudad-de-mexico/ciudad-de-mexico", [
              "5F1172F1-79AB-4643-B4E1-9AFC30954DD0.JPG", "IMG_1335.jpg", "IMG_1376.jpg", "IMG_1382.jpg",
              "IMG_1383.jpg", "IMG_1486.jpg", "IMG_1488.jpg", "IMG_1490.jpg",
              "IMG_1588.jpg", "IMG_1595.jpg", "IMG_1597.jpg", "IMG_1602.JPG",
              "IMG_1612.jpg", "IMG_7613.JPG", "IMG_8061.JPG"
            ])
          }
        ]
      },
      {
        id: "jalisco", name: "Jalisco",
        subtitle: "State",
        coverPhoto: "photos/mexico/jalisco/cover.jpg",
        locations: [
          {
            id: "puerto-vallarta", name: "Puerto Vallarta",
            description: "A stunning Pacific coast resort town where the jungle meets the sea.",
            coverPhoto: "photos/mexico/jalisco/puerto-vallarta/cover.jpg",
            photos: files("photos/mexico/jalisco/puerto-vallarta", [
              "81ED7B28-A016-4DBB-BCCC-0188F5BEFAEF.JPG", "C8A1EBFE-6496-442C-B4F6-2FA792A1343D.JPG", "IMG_3409.jpg", "IMG_3829.jpg",
              "IMG_3831.jpg", "IMG_3834.jpg", "IMG_3992.jpg", "IMG_4005.jpg",
              "IMG_9096.jpg", "IMG_9104.jpg"
            ])
          },
          {
            id: "cajititlan", name: "Cajititlán",
            description: "A picturesque lakeside village on Laguna de Cajititlán, near Guadalajara.",
            coverPhoto: "photos/mexico/jalisco/cajititlan/cover.jpg",
            photos: files("photos/mexico/jalisco/cajititlan", [
              "0686E164-408D-47A3-BB6C-D3A66360ECFF.JPG", "DE294E1F-71CF-41A9-9F78-4C398B6AC68F.JPG", "IMG_4107.jpg", "IMG_4109.jpg",
              "IMG_4115.jpg", "IMG_4136.jpg", "IMG_4310.jpg", "IMG_4372.jpg"
            ])
          },
          {
            id: "lagos-de-moreno", name: "Lagos de Moreno",
            description: "A Baroque colonial city known as the 'Athens of Jalisco'.",
            coverPhoto: "photos/mexico/jalisco/lagos-de-moreno/cover.jpg",
            photos: files("photos/mexico/jalisco/lagos-de-moreno", [
              "IMG_1918.jpg", "IMG_1932.jpg"
            ])
          },
          {
            id: "tapalpa", name: "Tapalpa",
            description: "A charming mountain town known for its cobblestone streets and cool climate.",
            coverPhoto: "photos/mexico/jalisco/tapalpa/cover.jpg",
            photos: files("photos/mexico/jalisco/tapalpa", [
              "623675C7-228D-4704-978C-F0551BF13B91.JPG", "CB6FF4D6-35D2-479D-95E0-283E414502AC.JPG", "IMG-20200208-WA0010.jpg", "IMG_5189.jpg",
              "IMG_5205.jpg", "IMG_5207.jpg", "IMG_5240.jpg", "IMG_9476.jpg",
              "IMG_9495.jpg"
            ])
          }
        ]
      }
    ]
  },

  // ── UNITED STATES ───────────────────────────────────────────────
  {
    id: "united-states", name: "United States", flag: "🇺🇸",
    continentId: "north-america",
    coverPhoto: "photos/united-states/cover.jpg",
    regions: [
      {
        id: "california", name: "California",
        subtitle: "State",
        coverPhoto: "photos/united-states/california/cover.jpg",
        locations: [
          {
            id: "los-angeles", name: "Los Angeles",
            description: "Sun, surf, and Hollywood — where dreams meet the Pacific.",
            coverPhoto: "photos/united-states/california/los-angeles/cover.jpg",
            photos: files("photos/united-states/california/los-angeles", [
              "005d187a-1375-4daf-824d-266fcf112f6c.JPG", "7eb95e4e-53e2-422a-adc5-b48eb538fea2.JPG", "IMG_3477.jpg", "IMG_5855.jpg",
              "IMG_5866.jpg", "IMG_5876.JPG"
            ])
          },
          {
            id: "burbank", name: "Burbank",
            description: "Home to major film studios and a classic small-city feel in LA County.",
            coverPhoto: "photos/united-states/california/burbank/cover.jpg",
            photos: files("photos/united-states/california/burbank", [
              "25f1cb22-23a9-4058-9593-3c27484bbbcb.JPG", "5b80ba99-b226-4ae8-b155-dc952ad019c7.JPG", "IMG_3504.jpg", "IMG_5884.jpg",
              "IMG_5885.jpg", "IMG_5886.jpg", "IMG_5887.jpg", "IMG_5905.jpg",
              "IMG_5906.jpg", "IMG_5908.jpg", "IMG_5915.jpg", "IMG_5941.jpg",
              "IMG_5953.jpg", "IMG_5954.jpg", "IMG_5960.jpg", "IMG_5962.jpg",
              "IMG_5963.jpg", "IMG_5977.jpg", "IMG_5985.JPG", "IMG_5990.JPG",
              "IMG_5993.JPG", "IMG_5994.JPG", "IMG_5998.JPG", "IMG_6023.JPG",
              "a77a431d-741f-4c11-a76a-95ace89faa2b.JPG", "d6724864-b38d-4186-8932-ac0c84ffe19f.JPG"
            ])
          },
          {
            id: "anaheim", name: "Anaheim",
            description: "Home to Disneyland, in the heart of Orange County.",
            coverPhoto: "photos/united-states/california/anaheim/cover.jpg",
            photos: files("photos/united-states/california/anaheim", [
              "IMG_3598.jpg", "IMG_6042.jpg", "IMG_6043.jpg", "IMG_6044.jpg",
              "IMG_6045.jpg", "IMG_6046.jpg", "IMG_6047.jpg", "IMG_6048.jpg",
              "IMG_6063.jpg", "IMG_6070.JPG", "IMG_6093.JPG", "IMG_6112.jpg",
              "IMG_6118.jpg", "IMG_6126.jpg"
            ])
          },
          {
            id: "santa-monica", name: "Santa Monica",
            description: "Iconic beachfront city with its famous pier and promenade.",
            coverPhoto: "photos/united-states/california/santa-monica/cover.jpg",
            photos: files("photos/united-states/california/santa-monica", [
              "IMG_3712.jpg", "IMG_6282.jpg", "IMG_6286.jpg"
            ])
          }
        ]
      },
      {
        id: "new-york", name: "New York",
        subtitle: "State",
        coverPhoto: "photos/united-states/new-york/cover.jpg",
        locations: [
          {
            id: "manhattan", name: "Manhattan",
            description: "The iconic heart of New York City — skyscrapers, culture, and energy.",
            coverPhoto: "photos/united-states/new-york/manhattan/cover.jpg",
            photos: files("photos/united-states/new-york/manhattan", [
              "2D5118CD-CAF5-4938-A44E-02A31583E642.JPG", "943DB546-10CD-4FCE-8C78-0C4655042CA5.JPG", "C5B3AD74-1E48-4912-92C5-8A597281B354.JPG", "IMG_0836.jpg",
              "IMG_0927.jpg", "IMG_0946.jpg", "IMG_1122.jpg", "IMG_1124.jpg",
              "IMG_1143.jpg", "IMG_1156.jpg", "IMG_1158.jpg", "IMG_1161.jpg",
              "IMG_1162.jpg", "IMG_1164.jpg", "IMG_1165.jpg", "IMG_1168.jpg",
              "IMG_1169.jpg", "IMG_1171.jpg", "IMG_1172.jpg", "IMG_1179.jpg",
              "IMG_1180.jpg", "IMG_1182.jpg", "IMG_1183.jpg", "IMG_1184.jpg",
              "IMG_1185.jpg", "IMG_1186.jpg", "IMG_1187.jpg", "IMG_1189.jpg",
              "IMG_1190.jpg", "IMG_1192.jpg", "IMG_1193.jpg", "IMG_1196.jpg",
              "IMG_1197.jpg", "IMG_1198.jpg", "IMG_1199.jpg", "IMG_1201.jpg",
              "IMG_1202.jpg", "IMG_1204.jpg", "IMG_1205.jpg", "IMG_1208.jpg",
              "IMG_1209.jpg", "IMG_1215.jpg", "IMG_1216.jpg", "IMG_1219.jpg",
              "IMG_1253.jpg", "IMG_1255.jpg", "IMG_1267.jpg", "IMG_1278.jpg",
              "IMG_1284.jpg", "IMG_1296.jpg", "IMG_1298.jpg"
            ])
          },
          {
            id: "brooklyn", name: "Brooklyn",
            description: "A vibrant borough of bridges, art, and neighborhoods full of character.",
            coverPhoto: "photos/united-states/new-york/brooklyn/cover.jpg",
            photos: files("photos/united-states/new-york/brooklyn", [
              "BC7ADF00-D5EC-4C47-9488-4E1C304C0064.JPG", "IMG_1314.jpg", "IMG_1315.jpg", "IMG_1319.jpg",
              "IMG_1327.jpg", "IMG_1343.jpg", "IMG_1344.jpg", "IMG_1345.jpg",
              "IMG_1358.jpg", "IMG_1359.jpg", "IMG_1360.jpg", "IMG_1362.jpg",
              "IMG_1365.jpg", "IMG_1367.jpg", "IMG_1368.jpg", "IMG_1371.jpg",
              "IMG_1372.jpg", "IMG_1375.jpg", "IMG_1376.jpg", "IMG_1381.jpg"
            ])
          }
        ]
      },
      {
        id: "new-jersey", name: "New Jersey",
        subtitle: "State",
        coverPhoto: "photos/united-states/new-jersey/cover.jpg",
        locations: [
          {
            id: "new-jersey", name: "New Jersey",
            description: "Views of the Manhattan skyline across the Hudson River.",
            coverPhoto: "photos/united-states/new-jersey/new-jersey/cover.jpg",
            photos: files("photos/united-states/new-jersey/new-jersey", [
              "IMG_1134.jpg"
            ])
          }
        ]
      }
    ]
  },

  // ── FRANCE ──────────────────────────────────────────────────────
  {
    id: "france", name: "France", flag: "🇫🇷",
    continentId: "europe",
    coverPhoto: "photos/france/cover.jpg",
    regions: [
      {
        id: "ile-de-france", name: "Île-de-France",
        subtitle: "Region",
        coverPhoto: "photos/france/ile-de-france/cover.jpg",
        locations: [
          {
            id: "paris", name: "Paris",
            description: "The City of Light — art, fashion, and romance at every turn.",
            coverPhoto: "photos/france/ile-de-france/paris/cover.jpg",
            photos: files("photos/france/ile-de-france/paris", [
              "5E06E058-7E09-48DF-AD3A-3E31D4431150.JPG", "IMG_2063.jpg", "IMG_2066.jpg", "IMG_2081.jpg",
              "IMG_2082.jpg", "IMG_2096.jpg", "IMG_2112.jpg", "IMG_2114.jpg",
              "IMG_2115.jpg", "IMG_2117.jpg", "IMG_2118.jpg", "IMG_2121.jpg",
              "IMG_2123.jpg", "IMG_2124.jpg", "IMG_2136.jpg", "IMG_2162.jpg",
              "IMG_2168.jpg", "IMG_2169.jpg", "IMG_2216.jpg", "IMG_2463.jpg",
              "IMG_2478.jpg", "IMG_2485.jpg", "IMG_2488.jpg", "IMG_2502.jpg",
              "IMG_2510.jpg", "IMG_2513.jpg", "IMG_2515.jpg", "IMG_2517.jpg",
              "IMG_2525.jpg", "IMG_2537.jpg", "IMG_2572.jpg", "IMG_2605.jpg",
              "IMG_2627.jpg", "IMG_2638.jpg", "IMG_2639.jpg", "IMG_2643.jpg",
              "IMG_2652.jpg", "IMG_2748.jpg", "IMG_2752.jpg", "IMG_2773.jpg",
              "IMG_3789.JPG", "IMG_3791.JPG", "IMG_3792.JPG"
            ])
          },
          {
            id: "marne-la-vallee", name: "Marne-la-Vallée",
            description: "Home to Disneyland Paris, in the Seine-et-Marne department.",
            coverPhoto: "photos/france/ile-de-france/marne-la-vallee/cover.jpg",
            photos: files("photos/france/ile-de-france/marne-la-vallee", [
              "IMG_2239.jpg", "IMG_2240.jpg", "IMG_2241.jpg", "IMG_2244.jpg",
              "IMG_2245.jpg", "IMG_2248.jpg", "IMG_2249.jpg", "IMG_2250.jpg",
              "IMG_2254.jpg", "IMG_2256.jpg", "IMG_2257.jpg", "IMG_2262.jpg",
              "IMG_2265.jpg", "IMG_2271.jpg", "IMG_2275.jpg", "IMG_2285.jpg",
              "IMG_2287.jpg", "IMG_2288.jpg", "IMG_2291.jpg", "IMG_2294.jpg",
              "IMG_2295.jpg", "IMG_2296.jpg", "IMG_2298.jpg", "IMG_2299.jpg",
              "IMG_2302.jpg", "IMG_2303.jpg", "IMG_2307.jpg", "IMG_2310.jpg",
              "IMG_2313.jpg", "IMG_2314.jpg", "IMG_2317.jpg", "IMG_2320.jpg",
              "IMG_2339.jpg", "IMG_2351.jpg", "IMG_2352.jpg", "IMG_2356.jpg",
              "IMG_2357.jpg", "IMG_2369.jpg", "IMG_2370.jpg", "IMG_2372.jpg",
              "IMG_2376.jpg", "IMG_2378.jpg", "IMG_2382.jpg", "IMG_2387.jpg",
              "IMG_2389.jpg", "IMG_2396.jpg", "IMG_2397.jpg", "IMG_2399.jpg",
              "IMG_2402.jpg", "IMG_2403.jpg", "IMG_2404.jpg", "IMG_2407.jpg",
              "IMG_2408.jpg", "IMG_2409.jpg", "IMG_2411.jpg", "IMG_2419.jpg",
              "IMG_2420.jpg", "IMG_2422.jpg", "IMG_2424.jpg", "IMG_2426.jpg",
              "IMG_2446.jpg", "IMG_2447.jpg", "IMG_2452.jpg", "IMG_2455.jpg",
              "IMG_2456.jpg"
            ])
          }
        ]
      }
    ]
  },

  // ── SPAIN ───────────────────────────────────────────────────────
  {
    id: "spain", name: "Spain", flag: "🇪🇸",
    continentId: "europe",
    coverPhoto: "photos/spain/cover.jpg",
    regions: [
      {
        id: "comunidad-de-madrid", name: "Comunidad de Madrid",
        subtitle: "Autonomous Community",
        coverPhoto: "photos/spain/comunidad-de-madrid/cover.jpg",
        locations: [
          {
            id: "madrid", name: "Madrid",
            description: "Spain's passionate capital, home to the Prado and legendary nightlife.",
            coverPhoto: "photos/spain/comunidad-de-madrid/madrid/cover.jpg",
            photos: files("photos/spain/comunidad-de-madrid/madrid", [
              "55419E5A-2325-42E4-AFC8-0F4BC3C8674D.JPG", "IMG_1506.jpg", "IMG_1511.jpg", "IMG_1521.jpg",
              "IMG_1523.jpg", "IMG_1559.jpg", "IMG_1567.jpg", "IMG_1571.jpg",
              "IMG_1574.jpg", "IMG_1575.jpg", "IMG_1576.jpg", "IMG_1577.jpg",
              "IMG_1583.jpg", "IMG_1585.jpg", "IMG_1586.jpg", "IMG_1618.jpg",
              "IMG_1619.jpg", "IMG_1621.jpg", "IMG_1624.jpg", "IMG_1626.jpg",
              "IMG_1627.jpg", "IMG_1638.jpg", "IMG_1641.jpg", "IMG_1644.jpg",
              "IMG_1646.jpg", "IMG_1653.jpg", "IMG_1655.jpg", "IMG_1670.jpg",
              "IMG_1688.jpg", "IMG_1748.jpg", "IMG_1761.jpg", "IMG_1795.jpg",
              "IMG_3785.JPG", "IMG_3786.JPG"
            ])
          }
        ]
      },
      {
        id: "pais-vasco", name: "País Vasco",
        subtitle: "Autonomous Community",
        coverPhoto: "photos/spain/pais-vasco/cover.jpg",
        locations: [
          {
            id: "bilbao", name: "Bilbao",
            description: "Vizcaya's dynamic capital, famous for the Guggenheim Museum.",
            coverPhoto: "photos/spain/pais-vasco/bilbao/cover.jpg",
            photos: files("photos/spain/pais-vasco/bilbao", [
              "IMG_2115.jpg", "IMG_2854.jpg", "IMG_2857.jpg", "IMG_2858.jpg",
              "IMG_2863.jpg", "IMG_2864.jpg", "IMG_2865.jpg", "IMG_2868.jpg",
              "IMG_2871.jpg"
            ])
          },
          {
            id: "donostia", name: "Donostia-San Sebastián",
            description: "A stunning bay city in Gipuzkoa renowned for its pintxos and beaches.",
            coverPhoto: "photos/spain/pais-vasco/donostia/cover.jpg",
            photos: files("photos/spain/pais-vasco/donostia", [
              "9E892CE6-8BAD-4886-B641-6E8441016920.JPG", "IMG_2915.jpg", "IMG_2967.jpg", "IMG_2968.jpg",
              "IMG_2973.jpg", "IMG_2974.jpg", "IMG_2975.jpg", "IMG_2978.jpg",
              "IMG_2979.jpg", "IMG_2984.jpg", "IMG_2985.jpg", "IMG_2986.jpg",
              "IMG_2987.jpg", "IMG_2989.jpg", "IMG_2990.jpg", "IMG_2991.jpg",
              "IMG_2995.jpg", "IMG_2997.jpg", "IMG_3001.jpg", "IMG_3002.jpg",
              "IMG_3003.jpg", "IMG_3008.jpg", "IMG_3009.jpg", "IMG_3018.jpg",
              "IMG_3023.jpg", "IMG_3025.jpg", "IMG_3028.jpg", "IMG_3029.jpg",
              "IMG_3030.jpg", "IMG_3031.jpg", "IMG_3034.jpg", "IMG_3035.jpg",
              "IMG_3037.jpg", "IMG_3040.jpg", "IMG_3041.jpg", "IMG_3048.jpg",
              "IMG_3050.jpg", "IMG_3051.jpg", "IMG_3055.jpg", "IMG_3057.jpg",
              "IMG_3059.jpg", "IMG_3060.jpg", "IMG_3064.jpg", "IMG_3065.jpg",
              "IMG_3066.jpg", "IMG_3068.jpg", "IMG_3069.jpg", "IMG_3074.jpg",
              "IMG_3075.jpg", "IMG_3080.jpg", "IMG_3081.jpg", "IMG_3083.jpg",
              "IMG_3084.jpg", "IMG_3088.jpg", "IMG_3089.jpg", "IMG_3092.jpg",
              "IMG_3093.jpg", "IMG_3097.jpg", "IMG_3098.jpg", "IMG_3099.jpg",
              "IMG_3102.jpg", "IMG_3107.jpg", "IMG_3109.jpg", "IMG_3111.jpg",
              "IMG_3118.jpg", "IMG_3121.jpg", "IMG_3122.jpg", "IMG_3124.jpg",
              "IMG_3128.jpg", "IMG_3129.jpg", "IMG_3131.jpg", "IMG_3132.jpg",
              "IMG_3793.JPG", "IMG_3794.JPG", "a2f37495-6934-45aa-9766-b4c80f8fffc6.JPG"
            ])
          },
          {
            id: "mutriku", name: "Mutriku",
            description: "A hidden gem fishing village on the Gipuzkoa coast.",
            coverPhoto: "photos/spain/pais-vasco/mutriku/cover.jpg",
            photos: files("photos/spain/pais-vasco/mutriku", [
              "IMG_2881.jpg", "IMG_2883.jpg", "IMG_2885.jpg", "IMG_2886.jpg",
              "IMG_2887.jpg", "IMG_2888.jpg", "IMG_2890.jpg", "IMG_2891.jpg",
              "IMG_2893.jpg", "IMG_2894.jpg", "IMG_2897.jpg", "IMG_2900.jpg",
              "IMG_2901.jpg", "IMG_2904.jpg", "IMG_2905.jpg", "IMG_2906.jpg",
              "IMG_2909.jpg", "IMG_2910.jpg", "IMG_2914.jpg", "IMG_2915.jpg",
              "IMG_2918.jpg", "IMG_2920.jpg", "IMG_2923.jpg", "IMG_2924.jpg",
              "IMG_2927.jpg", "IMG_2929.jpg", "IMG_2930.jpg", "IMG_2932.jpg",
              "IMG_2936.jpg", "IMG_2938.jpg", "IMG_2940.jpg"
            ])
          },
          {
            id: "gaztelugatxe", name: "Gaztelugatxe",
            description: "A dramatic islet in Vizcaya connected by a winding stone bridge.",
            coverPhoto: "photos/spain/pais-vasco/gaztelugatxe/cover.jpg",
            photos: files("photos/spain/pais-vasco/gaztelugatxe", [
              "IMG_1881.jpg", "IMG_1882.jpg", "IMG_1884.jpg", "IMG_1886.jpg",
              "IMG_1888.jpg", "IMG_1890.jpg", "IMG_1891.jpg", "IMG_1892.jpg",
              "IMG_1893.jpg", "IMG_1894.jpg", "IMG_1910.jpg", "IMG_1913.jpg",
              "IMG_1914.jpg", "IMG_1915.jpg", "IMG_1916.jpg", "IMG_1917.jpg",
              "IMG_1947.jpg", "IMG_1950.jpg", "IMG_1951.jpg", "IMG_1952.jpg",
              "IMG_1953.jpg", "IMG_3787.JPG", "IMG_3788.JPG"
            ])
          },
          {
            id: "bakio", name: "Bakio",
            description: "A beautiful surfing beach on the Vizcaya coast.",
            coverPhoto: "photos/spain/pais-vasco/bakio/cover.jpg",
            photos: files("photos/spain/pais-vasco/bakio", [
              "IMG_1871.jpg", "IMG_1876.jpg", "IMG_1877.jpg", "IMG_1879.jpg"
            ])
          },
          {
            id: "portugalete", name: "Portugalete",
            description: "A historic Vizcayan town home to the UNESCO Vizcaya Bridge.",
            coverPhoto: "photos/spain/pais-vasco/portugalete/cover.jpg",
            photos: files("photos/spain/pais-vasco/portugalete", [
              "03E00B68-17B6-4F32-93B4-ED00BFF5DC5D.JPG", "21A0F1B3-0AE0-4521-A053-A0792A3B6F31.JPG", "5F39C78D-3C38-4B37-B583-471C217211EA.JPG", "764692C0-44DD-4FA5-97B3-6325A164D12E.JPG",
              "A17CED4F-C2CA-4084-A51F-61DD1C158106.JPG", "CCDE948A-83FD-45DE-B8ED-DE73E9079065.JPG", "IMG_1842.jpg", "IMG_1844.jpg",
              "IMG_1859.jpg", "IMG_1860.jpg", "IMG_1867.jpg", "IMG_1999.jpg",
              "IMG_2001.jpg", "IMG_2005.jpg", "IMG_2012.jpg", "IMG_2030.jpg",
              "IMG_2031.jpg", "IMG_2034.jpg", "IMG_2035.jpg", "IMG_2036.jpg",
              "IMG_2043.jpg", "IMG_2046.jpg", "IMG_2047.jpg", "IMG_2048.jpg",
              "IMG_2049.jpg", "IMG_2051.jpg"
            ])
          },
          {
            id: "vitoria-gasteiz", name: "Vitoria-Gasteiz",
            description: "Capital of the Basque Country and Álava province, known for its medieval old town.",
            coverPhoto: "photos/spain/pais-vasco/vitoria-gasteiz/cover.jpg",
            photos: files("photos/spain/pais-vasco/vitoria-gasteiz", [
              "IMG_1978.jpg"
            ])
          }
        ]
      }
    ]
  },

  // ── JAPAN ───────────────────────────────────────────────────────
  {
    id: "japan", name: "Japan", flag: "🇯🇵",
    continentId: "asia",
    coverPhoto: "photos/japan/cover.jpg",
    regions: [
      {
        id: "tokyo", name: "Tokyo",
        subtitle: "Metropolis",
        coverPhoto: "photos/japan/tokyo/cover.jpg",
        locations: [
          {
            id: "tokyo", name: "Tokyo",
            description: "A dazzling mix of ancient tradition and futuristic innovation.",
            coverPhoto: "photos/japan/tokyo/tokyo/cover.jpg",
            photos: files("photos/japan/tokyo/tokyo", [
              "DCEDC9FB-46CE-4D52-9B82-9FF38C0B4BBB.JPG", "FEC7625F-952F-49BB-A384-E0663A49144C.JPG", "IMG_5882.jpg", "IMG_5886.jpg",
              "IMG_5900.jpg", "IMG_5902.jpg", "IMG_5908.jpg", "IMG_5909.jpg",
              "IMG_5910.jpg", "IMG_5913.jpg", "IMG_5915.jpg", "IMG_5921.jpg",
              "IMG_5922.jpg", "IMG_5924.jpg", "IMG_5925.jpg", "IMG_5926.jpg",
              "IMG_5930.jpg", "IMG_5932.jpg", "IMG_5933.jpg", "IMG_5934.jpg",
              "IMG_5935.jpg", "IMG_5937.jpg", "IMG_5938.jpg", "IMG_5950.jpg",
              "IMG_5952.jpg", "IMG_5953.jpg", "IMG_5964.jpg", "IMG_5966.jpg",
              "IMG_5967.jpg", "IMG_5970.jpg", "IMG_5975.jpg", "IMG_5976.jpg",
              "IMG_5985.jpg", "IMG_5987.jpg", "IMG_5988.jpg", "IMG_5993.jpg",
              "IMG_5994.jpg", "IMG_5997.jpg", "IMG_5999.jpg", "IMG_6010.jpg",
              "IMG_6030.jpg", "IMG_6040.jpg", "IMG_6041.jpg", "IMG_6043.jpg",
              "IMG_6053.jpg", "IMG_6057.jpg", "IMG_6069.jpg", "IMG_6079.jpg",
              "IMG_6111.jpg", "IMG_6121.jpg", "IMG_6169.jpg", "IMG_6174.jpg",
              "IMG_6183.jpg", "IMG_6190.jpg", "IMG_6276.jpg", "IMG_6278.jpg",
              "IMG_7675.jpg", "IMG_7677.jpg"
            ])
          }
        ]
      },
      {
        id: "chiba", name: "Chiba",
        subtitle: "Prefecture",
        coverPhoto: "photos/japan/chiba/cover.jpg",
        locations: [
          {
            id: "chiba", name: "Chiba",
            description: "A coastal prefecture east of Tokyo, home to Tokyo Disneyland.",
            coverPhoto: "photos/japan/chiba/chiba/cover.jpg",
            photos: files("photos/japan/chiba/chiba", [
              "IMG_7437.PNG", "IMG_7445.jpg", "IMG_7450.jpg", "IMG_7461.jpg",
              "IMG_7462.jpg", "IMG_7464.jpg", "IMG_7465.jpg", "IMG_7468.jpg",
              "IMG_7469.jpg", "IMG_7470.jpg", "IMG_7472.jpg", "IMG_7475.jpg",
              "IMG_7476.jpg", "IMG_7477.jpg", "IMG_7484.jpg", "IMG_7487.jpg",
              "IMG_7499.jpg", "IMG_7508.jpg", "IMG_7509.jpg", "IMG_7511.jpg",
              "IMG_7514.jpg", "IMG_7516.jpg", "IMG_7518.jpg", "IMG_7523.jpg",
              "IMG_7525.jpg", "IMG_7532.jpg", "IMG_7534.jpg", "IMG_7535.jpg",
              "IMG_7536.jpg", "IMG_7537.jpg", "IMG_7538.jpg", "IMG_7551.jpg",
              "IMG_7555.jpg", "IMG_7556.jpg", "IMG_7557.jpg", "IMG_7558.jpg",
              "IMG_7560.jpg", "IMG_7564.jpg", "IMG_7566.jpg", "IMG_7567.jpg",
              "IMG_7571.jpg", "IMG_7572.jpg", "IMG_7575.jpg", "IMG_7580.jpg",
              "IMG_7581.jpg", "IMG_7584.jpg", "IMG_7585.jpg", "IMG_7623.jpg",
              "IMG_7624.jpg", "IMG_7625.jpg", "IMG_7642.jpg", "IMG_7648.jpg",
              "IMG_7670.jpg", "IMG_7671.jpg", "IMG_7674.jpg", "IMG_7675.jpg",
              "IMG_7677.jpg"
            ])
          }
        ]
      },
      {
        id: "osaka", name: "Osaka",
        subtitle: "Prefecture",
        coverPhoto: "photos/japan/osaka/cover.jpg",
        locations: [
          {
            id: "osaka", name: "Osaka",
            description: "Japan's kitchen — street food, neon lights, and non-stop energy.",
            coverPhoto: "photos/japan/osaka/osaka/cover.jpg",
            photos: files("photos/japan/osaka/osaka", [
              "IMG_6251.jpg", "IMG_6325.jpg", "IMG_6330.jpg", "IMG_6338.jpg",
              "IMG_6353.jpg", "IMG_6366.jpg", "IMG_6382.jpg", "IMG_6383.jpg",
              "IMG_6411.jpg", "IMG_6429.jpg", "IMG_6439.jpg", "IMG_6445.jpg",
              "IMG_6457.jpg", "IMG_6485.jpg", "IMG_6530.jpg", "IMG_6532.jpg",
              "IMG_6682.jpg", "IMG_6683.jpg", "IMG_6685.jpg", "IMG_6861.jpg",
              "IMG_7188.jpg", "IMG_7199.jpg", "IMG_7210.jpg", "IMG_7223.jpg",
              "IMG_7229.jpg", "IMG_7230.jpg", "IMG_7311.jpg", "IMG_7362.jpg",
              "IMG_7365.jpg", "IMG_7375.jpg", "IMG_7390.jpg", "IMG_7392.jpg"
            ])
          }
        ]
      },
      {
        id: "nara", name: "Nara",
        subtitle: "Prefecture",
        coverPhoto: "photos/japan/nara/cover.jpg",
        locations: [
          {
            id: "nara", name: "Nara",
            description: "Ancient capital famous for its giant Buddha and freely roaming deer.",
            coverPhoto: "photos/japan/nara/nara/cover.jpg",
            photos: files("photos/japan/nara/nara", [
              "IMG_0CE396D5-E80A-4A05-9A23-71FD5990EA01.JPEG", "IMG_6695.jpg", "IMG_6696.jpg", "IMG_6698.jpg",
              "IMG_6699.jpg", "IMG_6700.jpg", "IMG_6701.jpg", "IMG_6703.jpg",
              "IMG_6707.jpg", "IMG_6708.jpg", "IMG_6710.jpg", "IMG_6712.jpg",
              "IMG_6714.jpg", "IMG_6725.jpg", "IMG_6726.jpg", "IMG_6727.jpg",
              "IMG_6731.jpg", "IMG_6732.jpg", "IMG_6734.jpg", "IMG_6735.jpg",
              "IMG_6739.jpg", "IMG_6740.jpg", "IMG_6741.jpg", "IMG_6746.jpg",
              "IMG_6749.jpg", "IMG_6753.jpg", "IMG_6754.jpg", "IMG_6758.jpg",
              "IMG_6759.jpg", "IMG_6761.jpg", "IMG_6762.jpg", "IMG_6764.jpg",
              "IMG_6767.jpg", "IMG_6768.jpg", "IMG_6769.jpg", "IMG_6773.jpg",
              "IMG_6775.jpg", "IMG_6777.jpg", "IMG_6783.jpg", "IMG_6789.jpg",
              "IMG_6793.jpg", "IMG_6794.jpg", "IMG_6795.jpg", "IMG_6797.jpg",
              "IMG_6799.jpg", "IMG_6803.jpg", "IMG_6804.jpg", "IMG_6807.jpg",
              "IMG_6808.jpg", "IMG_6810.jpg", "IMG_6811.jpg", "IMG_6813.jpg",
              "IMG_6815.jpg", "IMG_6816.jpg", "IMG_6819.jpg", "IMG_6820.jpg",
              "IMG_6824.jpg", "IMG_6827.jpg", "IMG_6829.jpg", "IMG_6830.jpg",
              "IMG_6832.jpg", "IMG_6834.jpg", "IMG_6847.jpg", "IMG_6848.jpg",
              "IMG_6851.jpg", "IMG_6853.jpg", "IMG_6861.jpg", "IMG_6862.jpg"
            ])
          }
        ]
      },
      {
        id: "kyoto", name: "Kyoto",
        subtitle: "Prefecture",
        coverPhoto: "photos/japan/kyoto/cover.jpg",
        locations: [
          {
            id: "uji", name: "Uji",
            description: "A scenic city in Kyoto Prefecture famed for green tea and the Tale of Genji.",
            coverPhoto: "photos/japan/kyoto/uji/cover.jpg",
            photos: files("photos/japan/kyoto/uji", [
              "IMG_6590.jpg", "IMG_6605.jpg", "IMG_6617.jpg", "IMG_6627.jpg",
              "IMG_6633.jpg", "IMG_6637.jpg", "IMG_6651.jpg", "IMG_6652.jpg",
              "IMG_6660.jpg", "IMG_6675.jpg", "IMG_7054.jpg", "IMG_7055.jpg",
              "IMG_7057.jpg", "IMG_7066.jpg", "IMG_7068.jpg", "IMG_7071.jpg",
              "IMG_7080.jpg", "IMG_7145.jpg", "IMG_7150.jpg", "IMG_7154.jpg",
              "IMG_7172.jpg", "IMG_7175.jpg"
            ])
          }
        ]
      },
      {
        id: "hiroshima", name: "Hiroshima",
        subtitle: "Prefecture",
        coverPhoto: "photos/japan/hiroshima/cover.jpg",
        locations: [
          {
            id: "hiroshima", name: "Hiroshima",
            description: "A city of peace and resilience, rebuilt after 1945 into a thriving metropolis.",
            coverPhoto: "photos/japan/hiroshima/hiroshima/cover.jpg",
            photos: files("photos/japan/hiroshima/hiroshima", [
              "6309EC8F-D607-41A6-A519-A77AE8DF614E.JPG", "E89E5B8C-354F-4A83-BE38-8CFC22EDAD0D.JPG", "IMG_6989.jpg", "IMG_6990.jpg",
              "IMG_6991.jpg", "IMG_6992.jpg", "IMG_6993.jpg", "IMG_6995.jpg",
              "IMG_6996.jpg", "IMG_6999.jpg", "IMG_7001.jpg", "IMG_7002.jpg",
              "IMG_7003.jpg", "IMG_7004.jpg", "IMG_7005.jpg", "IMG_7006.jpg",
              "IMG_7008.jpg", "IMG_7009.jpg", "IMG_7010.jpg", "IMG_7016.jpg",
              "IMG_7017.jpg", "IMG_7021.jpg", "IMG_7022.jpg", "IMG_7024.jpg",
              "IMG_7025.jpg", "IMG_7031.jpg", "IMG_7034.jpg", "IMG_7036.jpg",
              "IMG_7039.jpg"
            ])
          },
          {
            id: "miyajima", name: "Miyajima Island",
            description: "Sacred island in Hiroshima Bay, home to the iconic floating torii gate.",
            coverPhoto: "photos/japan/hiroshima/miyajima/cover.jpg",
            photos: files("photos/japan/hiroshima/miyajima", [
              "5335B0EF-C02D-4E91-977C-84A65BFC50E6.JPG", "7BFC483D-DEDC-469D-8B96-2F61241070C8.JPG", "E1BDED78-7980-454B-BF2F-CF4D74C32128.JPG", "IMG_6868.jpg",
              "IMG_6869.jpg", "IMG_6871.jpg", "IMG_6873.jpg", "IMG_6874.jpg",
              "IMG_6875.jpg", "IMG_6877.jpg", "IMG_6878.jpg", "IMG_6880.jpg",
              "IMG_6882.jpg", "IMG_6883.jpg", "IMG_6885.jpg", "IMG_6886.jpg",
              "IMG_6887.jpg", "IMG_6889.jpg", "IMG_6906.jpg", "IMG_6907.jpg",
              "IMG_6908.jpg", "IMG_6912.jpg", "IMG_6913.jpg", "IMG_6915.jpg",
              "IMG_6916.jpg", "IMG_6919.jpg", "IMG_6922.jpg", "IMG_6924.jpg",
              "IMG_6925.jpg", "IMG_6926.jpg", "IMG_6927.jpg", "IMG_6928.jpg",
              "IMG_6930.jpg", "IMG_6935.jpg", "IMG_6947.jpg", "IMG_6949.jpg",
              "IMG_6952.jpg", "IMG_6954.jpg", "IMG_6956.jpg", "IMG_6957.jpg",
              "IMG_6958.jpg", "IMG_6960.jpg", "IMG_6961.jpg", "IMG_6962.jpg",
              "IMG_6968.jpg", "IMG_6973.jpg", "IMG_6984.jpg", "IMG_6985.jpg",
              "IMG_6987.jpg"
            ])
          }
        ]
      }
    ]
  }

];

// Helper: build photo array from a folder path and list of filenames
function files(folder, names) {
  return names.map(name => ({ src: `${folder}/${name}`, caption: "" }));
}
