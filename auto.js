module.exports.handleAutomation = async function(products, checkpoint) {
  // async function lalalalFUNC(products){
  //products = JSON.parse(products);
  try {
    if (products == undefined) return;
    if (!products.products) {
      products.products = [
        {
          id: products.url.split('products/')[1],
          title: products.title,
          price: 150,
          ogprice: 39.99,
          currency: 'USD',
          url: products.url,
          image: products.image,
          filtered: false,
          sizes: products.sizes,
        },
      ];
    }
    if (!products.name) {
      try {
        products.name = new URL(products.url).hostname;
      } catch (error) {
        products.name = 'N/A';
      }
    }
    if (products.products.length == 0) return;
    let asd = new Date().toISOString();
    console.log('SHOPIFY PRODUCT FOUND handleAUTOMATION: ' + asd);
    console.log('NUMNBER TWO');
    if (products.siteOrigin.includes('palaceskateboard')) return;

    /*
  let allIds = products.products.map((a)=>a.id);
  for (const key in allIds) {

    const element = allIds[key];
    console.log(coolDownBank)
    if(!coolDownBank.includes(element)){
      coolDownBank.push(element)
      setTimeout(()=>{
        coolDownBank = coolDownBank.filter((a)=>a != element)
      }, 1000*60*5)
    }else{
      return;
    }
      
    
  }
 */
    console.log('NUMNBER TWO3');
    if (products.platform == 'shopify' || checkpoint) {
      try {
        console.log('NUMNBER TW4O');
        console.log(global.allAutomations);
        for (const key in global.allAutomations) {
          var element = global.allAutomations[key];
          //const siteToFind = element.site.find((a)=>a.label == products.site);

          // for (const keysite in element.site) {
          // const elementSite = element.site[keysite];
          console.log('yellowelement!');


          var elementSite = element.site.find((a) => a.label && urlConverter[a.label] && urlConverter[a.label] == products.siteOrigin);
          console.log('elementSite');
          console.log(elementSite);
          if (!elementSite) {
       
          //  elementSite = readSites.find((a) => new URL(a.url).hostname == new URL(products.siteOrigin).hostname);
          let found = false;
          let hoster = new URL(products.siteOrigin).hostname;
          if(readSites){

          
          for (const keyau in element.site) {
            const elementau = element.site[keyau];
            let finder = readSites.find((b)=>b.site === elementau.label)
            if(finder && finder.url.includes(hoster)){
              found = true;
              elementSite = finder;
              elementSite.label = elementSite.site;
              break;
            }

              
            
          }
        }
          //elementSite = element.site.find((a) => a.label && a.label == readSites.find((b)=>b.site === a.label)?.site);
            /*
            if (elementSite) {
              elementSite.label = elementSite.value;
            }*/
            console.log(elementSite);
          }

          if (elementSite && elementSite.label /* && products.site && elementSite.label == products.site*/) {
            function convertKeywords(keywords) {
              const _0x57ee53 = keywords.filter((_0x145434) => _0x145434.trim().startsWith('+')).map((_0xe53e0a) => _0xe53e0a.replace('+', '').trim());
              const _0x332743 = keywords.filter((_0x156b99) => _0x156b99.trim().startsWith('-')).map((_0x578f7a) => _0x578f7a.replace('-', '').trim());

              return {
                positiveKeywords: _0x57ee53,
                negativeKeywords: _0x332743,
              };
            }

            function matchSize(_0x2d7da4, _0x481c88) {
              if (!isNaN(_0x2d7da4) && !isNaN(_0x481c88)) {
                if (_0x2d7da4.includes('/')) {
                  _0x2d7da4 = _0x2d7da4.replace(' ', '');
                  console.logs(_0x2d7da4.toString() + ' : ' + _0x481c88.toString());
                  return _0x2d7da4.toString() === _0x481c88.toString();
                } else {
                  return parseFloat(_0x2d7da4.toString()) === parseFloat(_0x481c88.toString());
                }
              }

              /*
          if (_0x2d7da4.toLowerCase().includes('xs') && _0x481c88.toLowerCase() === 's' || _0x2d7da4.toLowerCase().includes('xxs') && _0x481c88.toLowerCase() === 'xs') {
              return ![];
          }
          */

              if (
                products.siteOrigin.includes('hatclub') ||
                products.siteOrigin.includes('fitted') ||
                products.siteOrigin.includes('lidshatdrop') ||
                products.siteOrigin.includes('sportsw') ||
                products.siteOrigin.includes('sneakertown')
              ) {
                //if(false){
                if (_0x2d7da4.includes('/') && _0x481c88.includes('/')) {
                  _0x2d7da4 = _0x2d7da4.replace(/ /g, '');

                  // return _0x2d7da4.toString() === _0x481c88.toString().trim();
                  return _0x2d7da4.toString().includes(_0x481c88.toString().trim());
                } else if (_0x2d7da4.includes('/') && !_0x481c88.includes('/')) {
                  return false;
                } else {
                  try {
                    let matchedNum = _0x2d7da4.toString().match(/[+-]?\d+(\.\d+)?/g)[0];

                    return parseFloat(matchedNum) === parseFloat(_0x481c88.toString());
                  } catch (error) {}
                  return _0x2d7da4.toString().includes(_0x481c88.toString().trim());
                }
              } else {
                try {
                  let matchedNum = _0x2d7da4.toString().match(/[+-]?\d+(\.\d+)?/g)[0];

                  return parseFloat(matchedNum) === parseFloat(_0x481c88.toString());
                } catch (error) {}
                return _0x2d7da4.toString().includes(_0x481c88.toString().trim());
              }
            }

            if (typeof element.keywords == 'string') {
              element.keywords = element.keywords.split('\n');
            }
            console.log('NOW HERE 1');

            for (const productskey in products.products) {
              const productInfo = products.products[productskey];
              if (productInfo.url) {
                if(!coolDownBank[element.uniqueID]) {
                  coolDownBank[element.uniqueID] = [];
                }
         
                if (coolDownBank[element.uniqueID].includes(productInfo.url)) {
                  continue;
                }
                /*
                  if (!coolDownBank.includes(productInfo.url)) {
                    coolDownBank.push(productInfo.url);
                    setTimeout(() => {
                      coolDownBank = coolDownBank.filter((a) => a != productInfo.url);
                    }, 1000 * 60 * 5);
                  } else {
                    continue;
                  }*/
              } else {
                continue;
              }
              for (const keywordkey in element.keywords) {
                const actualKeyword = element.keywords[keywordkey];

                if (actualKeyword.includes('+')) {
                  const { positiveKeywords, negativeKeywords } = convertKeywords(actualKeyword.split(','));
                  //this.keyWords.split(',')

                  const _0x16e404 = productInfo.title;

                  let _0x3dd182 = 0x0;
                  let _0x232d3f = 0x0;
                  for (let _0x20c25a of positiveKeywords) {
                    if (
                      _0x16e404
                        .toLowerCase()
                        .trim()
                        .includes(_0x20c25a.toLowerCase().trim())
                    ) {
                      _0x3dd182++;
                    }
                  }
                  for (let _0x38eaa3 of negativeKeywords) {
                    if (
                      _0x16e404
                        .toLowerCase()
                        .trim()
                        .includes(_0x38eaa3.toLowerCase().trim())
                    ) {
                      _0x232d3f++;
                    }
                  }
                  console.log('HERHER');
                  console.log(positiveKeywords);
                  if (positiveKeywords.length === _0x3dd182 && _0x232d3f === 0x0) {
                    //   if (_0x3dd182 > 0 && _0x232d3f === 0x0) {
                    console.log('HERHER2sd');

                    console.debug("AUTOSTART KEY: "+ (new Date()).toISOString());
                    let finalProductURL = '';
                    let finalKeywords = '';
                    let sizeTitle = '';

                    //   let toUse = products.site.find((a)=>a == products.site)
                    // let siteInfo = _0x4b9681.find((a)=>a.rowid == toUse)
                    let siteInfo = '';

                    let size;
                    if (!JSON.stringify(element.size).includes('random') && Array.isArray(element.size)) {
                      size = element.size.map((s) => s.value).join(',');
                    } else {
                      size = element.size[0].value;
                    }

                    let _0x47bd8d = size
                      .split(',')
                      .map((_0x1b075f) => _0x1b075f.replace(/\s/g, ''))
                      .sort(() => Math.random() - 0.5);

                    /*
                    let laster = products.url.slice(-1);
                    if (laster == '/') {
                      products.url = products.url.substring(0, products.url.length - 1);
                    }
    */

                    if (size === 'Random') {
                      //console.logss(_0x249cb0)
                      console.log('NOW HERE');
                      console.log(productInfo.sizes);
                      var _0x5078b2 = productInfo.sizes; //toUse.filter(_0x2fb7e7 => _0x2fb7e7.available);
                      if (_0x5078b2.length > 0x0) {
                        const _0x12f191 = _0x5078b2[Math.floor(Math.random() * _0x5078b2.length)];

                        finalProductURL = productInfo.url;
                        finalKeywords = _0x12f191.id;
                        sizeTitle = _0x12f191.title;
                      } else {
                        return;
                      }
                    } else {
                      let found = false;
                      for (let _0x5b4e7a of _0x47bd8d) {
                        //console.logss(_0x18ba6e.body.variants)

                        let choosen = productInfo.sizes.filter((a) => matchSize(a.title, _0x5b4e7a));

                        if (choosen[0]) {
                          finalProductURL = productInfo.url;
                          finalKeywords = choosen[0].id;
                          sizeTitle = choosen[0].title;
                          found = true;
                          //  this.selectedProduct = _0x18ba6e
                        }
                      }
                      if (found == false) {
                        return;
                      }
                    }

                    let acc = element.account;

                    if (typeof element.numTasks == 'string') {
                      try {
                        element.numTasks = parseInt(element.numTasks);
                        if (isNaN(element.numTasks)) {
                          element.numTasks = 1;
                        }
                      } catch (error) {
                        element.numTasks = 1;
                      }
                    }

                    if (
                      global.registeredQTMonitorTasks.length > 0 &&
                      global.registeredQTMonitorTasks.filter((a) => {
                        try {
                          let lasd = new URL(a.url).hostname;
                          let curhn = new URL(products.siteOrigin).hostname;
                          if (lasd == curhn) {
                            return a;
                          }
                        } catch (error) {}
                      }).length > 0
                    ) {
                      let data = global.registeredQTMonitorTasks.filter((a) => {
                        try {
                          let lasd = new URL(a.url).hostname;
                          let curhn = new URL(products.siteOrigin).hostname;
                          if (lasd == curhn) {
                            return a;
                          }
                        } catch (error) {}
                      });
                      let idBank = data.map((a) => a.id);
                      global.registeredQTMonitorTasks = global.registeredQTMonitorTasks.map((a) => {
                        if (idBank.includes(a.id)) {
                          a.answer = /*new URL(products.url).origin + '/products/' + products.handle*/ productInfo.url;
                        }
                        return a;
                      });
                      continue;
                    }

                    if (global.automationCPBank.length > 0) {
                      let toUse = global.automationCPBank.find((a) => a.url == products.siteOrigin && a.answer == '');
                      if (toUse) {
                        global.automationCPBank = global.automationCPBank.map((a) => {
                          if (toUse.taskid == a.taskid && a.answer == '') {
                            a.answer = {
                              url: productInfo.url,
                              autoSize: sizeTitle,
                              keywords: finalKeywords,
                              autoTitle: productInfo.title,
                              autoImage: productInfo.image,
                              autoLink: productInfo.url,
                            };
                          }
                          return a;
                        });

                        continue;
                      }
                    }
                    if(!coolDownBank[element.uniqueID]) {
                      coolDownBank[element.uniqueID] = [];
                    }
                    if (!coolDownBank[element.uniqueID].includes(productInfo.url)) {
                      coolDownBank[element.uniqueID].push(productInfo.url);
                      setTimeout(() => {
                        coolDownBank[element.uniqueID] = coolDownBank[element.uniqueID].filter((a) => a != productInfo.url);
                      }, 1000 * 60 * 5);
                    }

                    let allData = global.allTasks['tasks'];
                    const taskData = {
                      grName: products.name + ' (Automation)',
                      site: products.name,
                      url: products.siteOrigin,
                      tasksArr: [],
                      uniqueID: uuidModule.v4(),
                      selected: false,
                      monitorDelay: '3000',
                      errorDelay: '3000',
                      size: element['size'],
                    };

                    const toBeStarted = [];
                    let taskNumber = parseInt(element.numTasks);
                    if (isNaN(taskNumber)) return;

                    for (const profGr in element['profileGr']) {
                      const profElement = element['profileGr'][profGr];
                      if (profElement && element['proxyList'] && element['size']) {
                        if (profElement.type == 'profilegroup') {
                          let profile = global.allTasks['profile'].find((a) => a.uniqueID == profElement.id);

                          for (const key in profile.profiles) {
                            const elementProfile = profile.profiles[key];

                            for (let index = 0; index < taskNumber; index++) {
                              let taskid = uuidModule.v4();
                              toBeStarted.push(taskid);
                              console.log('KNAPPLER #2');
                              taskData.tasksArr.unshift({
                                monitor: finalKeywords,
                                // "keyWords": finalKeywords,
                                startingTime: asd,
                                autoURL: {
                                  name: elementSite.label,
                                  site: elementSite.label,
                                  url: products.siteOrigin + '/',
                                  rowid: uuidModule.v4(),
                                },
                                automationtask: true,
                                autoTitle: productInfo.title,
                                autoImage: productInfo.image,
                                autoLink: productInfo.url,
                                autoSize: sizeTitle,
                                autoQueue: true,
                                account: acc.value ? acc.value : '',
                                accountId: acc.id ? acc.id : '',
                                profileGr: profile.grName,
                                profileGroup: profile.uniqueID,
                                profile: elementProfile.prName,
                                profileId: elementProfile.uniqueID,
                                mode: 'Safe',
                                proxyList: element['proxyList'].value ? element['proxyList'].value : 'localhost',
                                proxyListId: element['proxyList'].id ? element['proxyList'].id : 'localhost',
                                size: element['size'],
                                password: '',
                                quantity: '1',
                                amount: 1,
                                scheduleTask: '',
                                status: 'Stopped',
                                uniqueID: taskid,
                                site: products.name,
                                //  "autotask":true
                              });
                              console.log('KNAPPLER #3');
                            }
                          }
                        } else {
                          for (const key in global.allTasks['profile']) {
                            const elementProfile = global.allTasks['profile'][key];

                            if (elementProfile.profiles.find((a) => a.uniqueID == profElement.id)) {
                              let data = elementProfile.profiles.find((a) => a.uniqueID == profElement.id);
                              for (let index = 0; index < taskNumber; index++) {
                                let taskid = uuidModule.v4();
                                toBeStarted.push(taskid);
                                console.log('KNAPPLER #4');
                                taskData.tasksArr.unshift({
                                  monitor: finalKeywords,
                                  automationtask: true,
                                  autoTitle: productInfo.title,
                                  autoImage: productInfo.image,
                                  autoLink: productInfo.url,
                                  autoURL: {
                                    name: elementSite.label,
                                    site: elementSite.label,
                                    url: products.siteOrigin + '/',
                                    rowid: uuidModule.v4(),
                                  },
                                  autoSize: sizeTitle,
                                  autoQueue: true,
                                  startingTime: asd,
                                  account: acc.value ? acc.value : '',
                                  accountId: acc.id ? acc.id : '',
                                  profileGr: elementProfile.grName,
                                  profileGroup: elementProfile.uniqueID,
                                  profile: data.prName,
                                  profileId: data.uniqueID,
                                  mode: 'Safe',
                                  proxyList: element['proxyList'].value ? element['proxyList'].value : 'localhost',
                                  proxyListId: element['proxyList'].id ? element['proxyList'].id : 'localhost',
                                  size: element['size'],
                                  password: '',
                                  quantity: '1',
                                  amount: 1,
                                  scheduleTask: '',
                                  status: 'Stopped',
                                  uniqueID: taskid,
                                  site: products.name,
                                  //"autotask":true
                                });
                                console.log('KNAPPLER #5');
                              }
                            }
                          }
                        }
                      }
                    }

                    global.allAutomations = global.allAutomations.map((a) => {
                      console.log();
                      if (a.uniqueID == element.uniqueID) {
                        console.log('AUTO RAUNNING');
                        a.started = true;
                        if (!a.runningTasks) {
                          a.runningTasks = [];
                        }
                        console.log(a.runningTasks);
                        a.runningTasks = a.runningTasks.concat(toBeStarted);
                        console.log(a.runningTasks);
                      }
                      return a;
                    });
                    console.log('NOW STARTING TASKSKSA');
                    console.log(new Date().toISOString());

                    allData.unshift(taskData);
                    global.writeData({ data: allData, source: 'tasks' });

                    global.startTasks(toBeStarted, true);
                    global.mainWindow.webContents.send('reloadtable', taskData, taskData.uniqueID);
                    global.mainWindow.webContents.send('automationstart', products.name);
                    setTimeout(() => {
                      module.exports.removeAutomationTask({
                        groupid: taskData.uniqueID,
                        taskids: toBeStarted,
                      });
                    }, 600000);
                    return;
                  }
                }

                if (actualKeyword.includes('https')) {
                  if (actualKeyword.includes(',')) continue;

                  let possibelHandler;
                  let possibelHandlerTwo;
                  try {
                    possibelHandler = new URL(actualKeyword);
                  } catch (error) {
                    possibelHandler = false;
                  }
                  try {
                    possibelHandlerTwo = new URL(productInfo.url);
                  } catch (error) {
                    possibelHandlerTwo = false;
                  }
                  if (!possibelHandler) continue;
                  if (!possibelHandlerTwo) continue;
                  let linkHandle = possibelHandler.pathname.split('products/')[1];
                  if (linkHandle.includes('?')) {
                    linkHandle = linkHandle.split('?')[0];
                  }
                  let prodHandle = possibelHandlerTwo.pathname.split('products/')[1];
                  const handler = prodHandle; //productInfo.id;

                  if (handler == linkHandle) {
                    //   if (_0x3dd182 > 0 && _0x232d3f === 0x0) {
                    console.log('KEYWORD MAZTCH!');
                    let finalProductURL = '';
                    let finalKeywords = '';
                    let sizeTitle = '';

                    //   let toUse = products.site.find((a)=>a == products.site)
                    // let siteInfo = _0x4b9681.find((a)=>a.rowid == toUse)
                    let siteInfo = '';

                    let size;
                    if (!JSON.stringify(element.size).includes('random') && Array.isArray(element.size)) {
                      size = element.size.map((s) => s.value).join(',');
                    } else {
                      size = element.size[0].value;
                    }

                    let _0x47bd8d = size
                      .split(',')
                      .map((_0x1b075f) => _0x1b075f.replace(/\s/g, ''))
                      .sort(() => Math.random() - 0.5);
                    console.log('SIZE NOW!');
                    console.log(_0x47bd8d);
                    /*
                    let laster = products.url.slice(-1);
                    if (laster == '/') {
                      products.url = products.url.substring(0, products.url.length - 1);
                    }*/

                    if (size === 'Random') {
                      //console.logss(_0x249cb0)

                      var _0x5078b2 = productInfo.sizes; //toUse.filter(_0x2fb7e7 => _0x2fb7e7.available);
                      if (_0x5078b2.length > 0x0) {
                        const _0x12f191 = _0x5078b2[Math.floor(Math.random() * _0x5078b2.length)];

                        finalProductURL = productInfo.url;
                        finalKeywords = _0x12f191.id;
                        sizeTitle = _0x12f191.title;
                      } else {
                        return;
                      }
                    } else {
                      let found = false;
                      for (let _0x5b4e7a of _0x47bd8d) {
                        //console.logss(_0x18ba6e.body.variants)

                        let choosen = productInfo.sizes.filter((a) => matchSize(a.title, _0x5b4e7a));

                        if (choosen[0]) {
                          finalProductURL = productInfo.url;
                          finalKeywords = choosen[0].id;
                          sizeTitle = choosen[0].title;
                          found = true;
                          //  this.selectedProduct = _0x18ba6e
                        }
                      }
                      if (found == false) {
                        return;
                      }
                    }

                    let acc = element.account;
                    if (!acc) {
                      acc = '';
                    }
                    console.log('STARTINT TASKS NUM; ');

                    if (typeof element.numTasks == 'string') {
                      try {
                        element.numTasks = parseInt(element.numTasks);
                        if (isNaN(element.numTasks)) {
                          element.numTasks = 1;
                        }
                      } catch (error) {
                        element.numTasks = 1;
                      }
                    }
                    console.log('ELEMTN RPROCILE');

                    if (
                      global.registeredQTMonitorTasks.length > 0 &&
                      global.registeredQTMonitorTasks.filter((a) => {
                        try {
                          let lasd = new URL(a.url).hostname;
                          let curhn = new URL(products.siteOrigin).hostname;
                          if (lasd == curhn) {
                            return a;
                          }
                        } catch (error) {}
                      }).length > 0
                    ) {
                      let data = global.registeredQTMonitorTasks.filter((a) => {
                        try {
                          let lasd = new URL(a.url).hostname;
                          let curhn = new URL(products.siteOrigin).hostname;
                          if (lasd == curhn) {
                            return a;
                          }
                        } catch (error) {}
                      });
                      let idBank = data.map((a) => a.id);
                      global.registeredQTMonitorTasks = global.registeredQTMonitorTasks.map((a) => {
                        if (idBank.includes(a.id)) {
                          a.answer = productInfo.url;
                        }
                        return a;
                      });
                      continue;
                    }
                    if (global.automationCPBank.length > 0) {
                      let toUse = global.automationCPBank.find((a) => a.url == products.siteOrigin && a.answer == '');
                      if (toUse) {
                        global.automationCPBank = global.automationCPBank.map((a) => {
                          if (toUse.taskid == a.taskid && a.answer == '') {
                            a.answer = {
                              url: productInfo.url,
                              autoSize: sizeTitle,
                              keywords: finalKeywords,
                              autoTitle: productInfo.title,
                              autoImage: productInfo.image,
                              autoLink: productInfo.url,
                            };
                          }
                          return a;
                        });
                        continue;
                      }
                    }
                    if(!coolDownBank[element.uniqueID]) {
                      coolDownBank[element.uniqueID] = [];
                    }
                    if (!coolDownBank[element.uniqueID].includes(productInfo.url)) {
                      coolDownBank[element.uniqueID].push(productInfo.url);
                      setTimeout(() => {
                        coolDownBank[element.uniqueID] = coolDownBank[element.uniqueID].filter((a) => a != productInfo.url);
                      }, 1000 * 60 * 5);
                    }
                    let allData = global.allTasks['tasks'];
                    const taskData = {
                      grName: products.name + ' (Automation)',
                      site: products.name,
                      url: products.siteOrigin,
                      tasksArr: [],
                      uniqueID: uuidModule.v4(),
                      selected: false,
                      monitorDelay: '3000',
                      errorDelay: '3000',
                      autoURL: {
                        name: elementSite.label,
                        site: elementSite.label,
                        url: products.siteOrigin + '/',
                        rowid: uuidModule.v4(),
                      },
                    };

                    const toBeStarted = [];
                    let taskNumber = parseInt(element.numTasks);
                    if (isNaN(taskNumber)) return;

                    console.log('KNAPPLER #1');
                    for (const profGr in element['profileGr']) {
                      const profElement = element['profileGr'][profGr];
                      if (profElement && element['proxyList'] && element['size']) {
                        if (profElement.type == 'profilegroup') {
                          let profile = global.allTasks['profile'].find((a) => a.uniqueID == profElement.id);

                          for (const key in profile.profiles) {
                            const elementProfile = profile.profiles[key];

                            for (let index = 0; index < taskNumber; index++) {
                              let taskid = uuidModule.v4();
                              toBeStarted.push(taskid);
                              console.log('KNAPPLER #2');
                              taskData.tasksArr.unshift({
                                monitor: finalKeywords,
                                // "keyWords": finalKeywords,
                                startingTime: asd,
                                automationtask: true,
                                autoTitle: productInfo.title,
                                autoImage: productInfo.image,
                                autoLink: productInfo.url,
                                autoURL: {
                                  name: elementSite.label,
                                  site: elementSite.label,
                                  url: products.siteOrigin + '/',
                                  rowid: uuidModule.v4(),
                                },
                                autoSize: sizeTitle,
                                autoQueue: true,
                                account: '',
                                accountId: '',
                                profileGr: profile.grName,
                                profileGroup: profile.uniqueID,
                                profile: elementProfile.prName,
                                profileId: elementProfile.uniqueID,
                                mode: 'Safe',
                                proxyList: element['proxyList'].value ? element['proxyList'].value : 'localhost',
                                proxyListId: element['proxyList'].id ? element['proxyList'].id : 'localhost',
                                size: element['size'],
                                password: '',
                                quantity: '1',
                                amount: 1,
                                scheduleTask: '',
                                status: 'Stopped',
                                uniqueID: taskid,
                                site: products.name,
                                //  "autotask":true
                              });
                              console.log('KNAPPLER #3');
                            }
                          }
                        } else {
                          for (const key in global.allTasks['profile']) {
                            const elementProfile = global.allTasks['profile'][key];

                            if (elementProfile.profiles.find((a) => a.uniqueID == profElement.id)) {
                              let data = elementProfile.profiles.find((a) => a.uniqueID == profElement.id);
                              for (let index = 0; index < taskNumber; index++) {
                                let taskid = uuidModule.v4();
                                toBeStarted.push(taskid);
                                console.log('KNAPPLER #4');
                                taskData.tasksArr.unshift({
                                  monitor: finalKeywords,
                                  automationtask: true,
                                  autoTitle: productInfo.title,
                                  autoImage: productInfo.image,
                                  autoLink: productInfo.url,
                                  autoURL: {
                                    name: elementSite.label,
                                    site: elementSite.label,
                                    url: products.siteOrigin + '/',
                                    rowid: uuidModule.v4(),
                                  },
                                  autoSize: sizeTitle,
                                  autoQueue: true,
                                  startingTime: asd,
                                  account: acc.value ? acc.value : '',
                                  accountId: acc.id ? acc.id : '',
                                  profileGr: elementProfile.grName,
                                  profileGroup: elementProfile.uniqueID,
                                  profile: data.prName,
                                  profileId: data.uniqueID,
                                  mode: 'Safe',
                                  proxyList: element['proxyList'].value ? element['proxyList'].value : 'localhost',
                                  proxyListId: element['proxyList'].id ? element['proxyList'].id : 'localhost',
                                  size: element['size'],
                                  password: '',
                                  quantity: '1',
                                  amount: 1,
                                  scheduleTask: '',
                                  status: 'Stopped',
                                  uniqueID: taskid,
                                  site: products.name,
                                  //"autotask":true
                                });
                                console.log('KNAPPLER #5');
                              }
                            }
                          }
                        }
                      }
                    }

                    global.allAutomations = global.allAutomations.map((a) => {
                      console.log();
                      if (a.uniqueID == element.uniqueID) {
                        console.log('AUTO RAUNNING');
                        a.started = true;
                        if (!a.runningTasks) {
                          a.runningTasks = [];
                        }
                        console.log(a.runningTasks);
                        a.runningTasks = a.runningTasks.concat(toBeStarted);
                        console.log(a.runningTasks);
                      }
                      return a;
                    });
                    console.log('NOW STARTING TASKSKSA');
                    console.log(new Date().toISOString());

                    allData.unshift(taskData);
                    global.writeData({ data: allData, source: 'tasks' });

                    global.startTasks(toBeStarted, true);
                    global.mainWindow.webContents.send('reloadtable', taskData, taskData.uniqueID);
                    global.mainWindow.webContents.send('automationstart', products.name);
                    //Write setTimeout with executation after 10 minutes
                    setTimeout(() => {
                      module.exports.removeAutomationTask({
                        groupid: taskData.uniqueID,
                        taskids: toBeStarted,
                      });
                    }, 600000);

                    return;
                  }
                }
              }
            }
          }
        }
        //  }
      } catch (error) {
        console.log(error);
      }
    }

    if (products.platform.toLowerCase().includes('nike')) {
      try {
        // console.log(products);
        for (const key in global.allAutomations) {
          var element = global.allAutomations[key];
          //const siteToFind = element.site.find((a)=>a.label == products.site);

          // for (const keysite in element.site) {
          if (!products.locale) {
            products.locale = 'US';
          }
          console.log("LOOKGIN FOR NIKE!")
          const elementSite = element.site.map((a) => a.label).filter((a) => a.toLowerCase().includes('nike'));
          let filered = global.orisites.find((a) => elementSite.includes(a.name) && a.short == products.locale);
          console.log(filered)
          if (filered && filered.name) {
            products.name = filered.name;
            function convertKeywords(keywords) {
              const _0x57ee53 = keywords.filter((_0x145434) => _0x145434.trim().startsWith('+')).map((_0xe53e0a) => _0xe53e0a.replace('+', '').trim());
              const _0x332743 = keywords.filter((_0x156b99) => _0x156b99.trim().startsWith('-')).map((_0x578f7a) => _0x578f7a.replace('-', '').trim());

              return {
                positiveKeywords: _0x57ee53,
                negativeKeywords: _0x332743,
              };
            }

            function matchSize(_0x2d7da4, _0x481c88) {
              if (!isNaN(_0x2d7da4) && !isNaN(_0x481c88)) {
                if (_0x2d7da4.includes('/')) {
                  _0x2d7da4 = _0x2d7da4.replace(' ', '');
                  console.logs(_0x2d7da4.toString() + ' : ' + _0x481c88.toString());
                  return _0x2d7da4.toString() === _0x481c88.toString();
                } else {
                  return parseFloat(_0x2d7da4.toString()) === parseFloat(_0x481c88.toString());
                }
              }
            }

            if (typeof element.keywords == 'string') {
              element.keywords = element.keywords.split('\n');
            }
            console.log('NOW LOOKING FOR KEYWORDS');

            for (const productskey in products.products) {
              const productInfo = products.products[productskey];
              if (!productInfo.id) {
                if (products.sku) {
                  productInfo.id = products.sku;
                } else {
                  if(productInfo.url){
                    const inputUrl = productInfo.url;
                    const lastIndex = inputUrl.lastIndexOf('/');
                    const result = inputUrl.slice(lastIndex + 1);
                    productInfo.id = result;
                    console.log(result);
                  }
               
                  continue;
                }
              }
            
              console.log("NOW CHECKING KEY WORDS")
              console.log(productInfo.id)
              console.log(element.keywords)
              for (const keywordkey in element.keywords) {
                const actualKeyword = element.keywords[keywordkey];
                if (true) {
                  if (actualKeyword.trim() === productInfo.id) {
                    //   if (_0x3dd182 > 0 && _0x232d3f === 0x0) {



                      if (productInfo.url || productInfo.id) {
                        if(!coolDownBank[element.uniqueID]) {
                          coolDownBank[element.uniqueID] = [];
                        }
                        if(productInfo.url) {
                          if (!coolDownBank[element.uniqueID].includes(productInfo.url)) {
                            coolDownBank[element.uniqueID].push(productInfo.url);
                            setTimeout(() => {
                              coolDownBank[element.uniqueID] = coolDownBank[element.uniqueID].filter((a) => a != productInfo.url);
                            }, 1000 * 60 * 5);
                          } else {
                            console.log("C=TJ)JT(E2")
                            continue;
                          }
                        }else{
                          if (!coolDownBank[element.uniqueID].includes(productInfo.id)) {
                            coolDownBank[element.uniqueID].push(productInfo.id);
                            setTimeout(() => {
                              coolDownBank[element.uniqueID] = coolDownBank[element.uniqueID].filter((a) => a != productInfo.id);
                            }, 1000 * 60 * 5);
                          } else {
                            console.log("C=TJ)JT(E2")
                            continue;
                          }
                        }
                     
                      } else {
                        console.log("C=TJ)JT(E1")
                        continue;
                      }


                    console.log('KEYWORD MAZTCH!');
                    let finalProductURL = '';
                    let finalKeywords = '';
                    let sizeTitle = '';

                    //   let toUse = products.site.find((a)=>a == products.site)
                    // let siteInfo = _0x4b9681.find((a)=>a.rowid == toUse)
                    let siteInfo = '';

                    let size;
                    if (!JSON.stringify(element.size).includes('random') && Array.isArray(element.size)) {
                      size = element.size.map((s) => s.value).join(',');
                    } else {
                      size = element.size[0].value;
                    }

                    let _0x47bd8d = size
                      .split(',')
                      .map((_0x1b075f) => _0x1b075f.replace(/\s/g, ''))
                      .sort(() => Math.random() - 0.5);
                    console.log('SIZE NOW!');
                    console.log(_0x47bd8d);
                    /*
                    let laster = products.url.slice(-1);
                    if (laster == '/') {
                      products.url = products.url.substring(0, products.url.length - 1);
                    }
    */

                    if (size === 'Random') {
                      //console.logss(_0x249cb0)

                      var _0x5078b2 = productInfo.sizes; //toUse.filter(_0x2fb7e7 => _0x2fb7e7.available);
                      if (_0x5078b2.length > 0x0) {
                        const _0x12f191 = _0x5078b2[Math.floor(Math.random() * _0x5078b2.length)];

                        finalProductURL = productInfo.url;
                        finalKeywords = _0x12f191.id;
                        sizeTitle = _0x12f191.title;
                      } else {
                        return;
                      }
                    } else {
                      let found = false;
                      for (let _0x5b4e7a of _0x47bd8d) {
                        //console.logss(_0x18ba6e.body.variants)

                        let choosen = productInfo.sizes.filter((a) => matchSize(a.title, _0x5b4e7a));

                        if (choosen[0]) {
                          finalProductURL = productInfo.url;
                          finalKeywords = choosen[0].id;
                          sizeTitle = choosen[0].title;
                          found = true;
                          //  this.selectedProduct = _0x18ba6e
                        }
                      }
                      if (found == false) {
                        return;
                      }
                    }

                    console.log('STARTINT TASKS NUM; ');

                    if (typeof element.numTasks == 'string') {
                      try {
                        element.numTasks = parseInt(element.numTasks);
                        if (isNaN(element.numTasks)) {
                          element.numTasks = 1;
                        }
                      } catch (error) {
                        element.numTasks = 1;
                      }
                    }

                    if (
                      global.registeredQTMonitorTasks.length > 0 &&
                      global.registeredQTMonitorTasks.filter((a) => {
                        try {
                          let lasd = new URL(a.url).hostname;
                          let curhn = new URL(products.siteOrigin).hostname;
                          if (lasd == curhn) {
                            return a;
                          }
                        } catch (error) {}
                      }).length > 0
                    ) {
                      let data = global.registeredQTMonitorTasks.filter((a) => {
                        try {
                          let lasd = new URL(a.url).hostname;
                          let curhn = new URL(products.siteOrigin).hostname;
                          if (lasd == curhn) {
                            return a;
                          }
                        } catch (error) {}
                      });
                      let idBank = data.map((a) => a.id);
                      global.registeredQTMonitorTasks = global.registeredQTMonitorTasks.map((a) => {
                        if (idBank.includes(a.id)) {
                          a.answer = /*new URL(products.url).origin + '/products/' + products.handle*/ productInfo.url;
                        }
                        return a;
                      });
                      continue;
                    }

                    console.log('ELEMTN RPROCILE');

                    let allData = global.allTasks['tasks'];
                    const taskData = {
                      grName: products.name + ' (Automation)',
                      site: products.name,
                      url: products.siteOrigin,
                      tasksArr: [],
                      uniqueID: uuidModule.v4(),
                      selected: false,
                      monitorDelay: '3000',
                      errorDelay: '3000',
                    };

                    const toBeStarted = [];
                    let taskNumber = parseInt(element.numTasks);
                    if (isNaN(taskNumber)) return;

                    console.log('KNAPPLER #1');
                    for (const profGr in element['profileGr']) {
                      const profElement = element['profileGr'][profGr];
                      if (profElement && element['proxyList'] && element['size']) {
                        if (profElement.type == 'profilegroup') {
                          let profile = global.allTasks['profile'].find((a) => a.uniqueID == profElement.id);

                          for (const key in profile.profiles) {
                            const elementProfile = profile.profiles[key];

                            for (let index = 0; index < taskNumber; index++) {
                              let taskid = uuidModule.v4();
                              toBeStarted.push(taskid);
                              console.log('KNAPPLER #2');
                              taskData.tasksArr.unshift({
                                monitor: productInfo.id,
                                // "keyWords": finalKeywords,
                                startingTime: asd,
                                automationtask: true,
                                autoTitle: productInfo.title,
                                autoImage: productInfo.image,
                                autoLink: productInfo.url,
                                autoURL: {
                                  name: products.name,
                                  site: products.name,
                                  url: products.siteOrigin + '/',
                                  rowid: uuidModule.v4(),
                                },
                                autoId: productInfo.id,
                                autoSize: sizeTitle ? sizeTitle : size,
                                autoQueue: true,

                                account: '',
                                accountId: '',
                                profileGr: profile.grName,
                                profileGroup: profile.uniqueID,
                                profile: elementProfile.prName,
                                profileId: elementProfile.uniqueID,
                                mode: 'Guest',
                                proxyList: element['proxyList'].value ? element['proxyList'].value : 'localhost',
                                proxyListId: element['proxyList'].id ? element['proxyList'].id : 'localhost',
                                size: element['size'],
                                password: '',
                                quantity: '1',
                                amount: 1,
                                scheduleTask: '',
                                status: 'Stopped',
                                uniqueID: taskid,
                                site: products.name,
                                //  "autotask":true
                              });
                              console.log('KNAPPLER #3');
                            }
                          }
                        } else {
                          for (const key in global.allTasks['profile']) {
                            const elementProfile = global.allTasks['profile'][key];

                            if (elementProfile.profiles.find((a) => a.uniqueID == profElement.id)) {
                              let data = elementProfile.profiles.find((a) => a.uniqueID == profElement.id);
                              for (let index = 0; index < taskNumber; index++) {
                                let taskid = uuidModule.v4();
                                toBeStarted.push(taskid);
                                console.log('KNAPPLER #4');
                                taskData.tasksArr.unshift({
                                  monitor: productInfo.id,
                                  automationtask: true,
                                  autoTitle: productInfo.title,
                                  autoImage: productInfo.image,
                                  autoLink: productInfo.url,
                                  autoURL: {
                                    name: products.name,
                                    site: products.name,
                                    url: products.siteOrigin + '/',
                                    rowid: uuidModule.v4(),
                                  },
                                  autoId: productInfo.id,
                                  autoSize: sizeTitle ? sizeTitle : size,
                                  autoQueue: true,
                                  startingTime: asd,
                                  account: '',
                                  accountId: '',
                                  profileGr: elementProfile.grName,
                                  profileGroup: elementProfile.uniqueID,
                                  profile: data.prName,
                                  profileId: data.uniqueID,
                                  mode: 'Guest',
                                  proxyList: element['proxyList'].value ? element['proxyList'].value : 'localhost',
                                  proxyListId: element['proxyList'].id ? element['proxyList'].id : 'localhost',
                                  size: element['size'],
                                  password: '',
                                  quantity: '1',
                                  amount: 1,
                                  scheduleTask: '',
                                  status: 'Stopped',
                                  uniqueID: taskid,
                                  site: products.name,
                                  //"autotask":true
                                });
                                console.log('KNAPPLER #5');
                              }
                            }
                          }
                        }
                      }
                    }

                    global.allAutomations = global.allAutomations.map((a) => {
                      console.log();
                      if (a.uniqueID == element.uniqueID) {
                        console.log('AUTO RAUNNING');
                        a.started = true;
                        if (!a.runningTasks) {
                          a.runningTasks = [];
                        }
                        console.log(a.runningTasks);
                        a.runningTasks = a.runningTasks.concat(toBeStarted);
                        console.log(a.runningTasks);
                      }
                      return a;
                    });
                    console.log('NOW STARTING TASKSKSA');
                    console.log(new Date().toISOString());

                    allData.unshift(taskData);
                    global.writeData({ data: allData, source: 'tasks' });

                    global.startTasks(toBeStarted, true);
                    global.mainWindow.webContents.send('reloadtable', taskData, taskData.uniqueID);
                    global.mainWindow.webContents.send('automationstart', products.name);
                    setTimeout(() => {
                      module.exports.removeAutomationTask({
                        groupid: taskData.uniqueID,
                        taskids: toBeStarted,
                      });
                    }, 600000);
                    return;
                  }
                }
              }
            }
          }
        }
        //  }
      } catch (error) {
        console.log(error);
      }
    }

    console.log(global.allAutomations);
    //FIX AUTOMATIONS PUCKING UP EVEN THO SITE ISN'T SELECTED
    //FIX LOCAL MONTIORS NOT PINGNING WHEN PRODUCT ACTUALLY RESTOCKING
  } catch (error) {
    console.log('ERROR OCCUREND WHILE HANDLING AUTOS');
    console.log(error);
    console.log(products);
    console.log('END ERROR OCCUREND WHILE HANDLING AUTOS');
  }
};
