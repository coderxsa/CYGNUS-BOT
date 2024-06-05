;
import _0xf85905 from 'cheerio';
import _0x3e64a6 from 'node-fetch';
import _0x1446b3 from 'axios';
async function sekaikomikDl(_0x281ece) {
  let _0x44a26d = await _0x3e64a6(_0x281ece);
  let _0x25e5f8 = _0xf85905.load(await _0x44a26d.text());
  let _0x546e7f = _0x25e5f8("script").map((_0x597dd9, _0x56d025) => _0x25e5f8(_0x56d025).html()).toArray();
  _0x546e7f = _0x546e7f.filter(_0x435fb6 => /wp-content/i.test(_0x435fb6));
  _0x546e7f = eval(_0x546e7f[0x0].split("\"images\":")[0x1].split('}],')[0x0]);
  return _0x546e7f.map(_0x426296 => encodeURI(_0x426296));
}
async function facebookDl(_0x5bfb47) {
  let _0x236170 = await _0x3e64a6('https://fdownloader.net/');
  let _0x138dbf = _0xf85905.load(await _0x236170.text());
  let _0x353382 = _0x138dbf("input[name=\"__RequestVerificationToken\"]").attr("value");
  let _0x5cd298 = await (await _0x3e64a6("https://fdownloader.net/api/ajaxSearch", {
    method: "post",
    headers: {
      cookie: _0x236170.headers.get("set-cookie"),
      'content-type': "application/x-www-form-urlencoded; charset=UTF-8",
      referer: "https://fdownloader.net/"
    },
    body: new URLSearchParams(Object.entries({
      __RequestVerificationToken: _0x353382,
      q: _0x5bfb47
    }))
  })).json();
  let _0x4376b2 = _0xf85905.load(_0x5cd298.data);
  let _0x4f15ed = {};
  _0x4376b2('.button.is-success.is-small.download-link-fb').each(function () {
    let _0x1e455e = _0x4376b2(this).attr("title").split(" ")[0x1];
    let _0x24048d = _0x4376b2(this).attr("href");
    if (_0x24048d) {
      _0x4f15ed[_0x1e455e] = _0x24048d;
    }
  });
  return _0x4f15ed;
}
async function tiktokStalk(_0x292c3a) {
  let _0x4a75a7 = await _0x1446b3.get('https://urlebird.com/user/' + _0x292c3a + '/');
  let _0x43f41b = _0xf85905.load(_0x4a75a7.data);
  let _0x3760e1 = {
    pp_user: _0x43f41b("div[class=\"col-md-auto justify-content-center text-center\"] > img").attr("src"),
    name: _0x43f41b("h1.user").text().trim(),
    "username": _0x43f41b("div.content > h5").text().trim(),
    "followers": _0x43f41b("div[class=\"col-7 col-md-auto text-truncate\"]").text().trim().split(" ")[0x1],
    following: _0x43f41b("div[class=\"col-auto d-none d-sm-block text-truncate\"]").text().trim().split(" ")[0x1],
    "description": _0x43f41b("div.content > p").text().trim()
  };
  return _0x3760e1;
}
async function igStalk(_0x3a0bc2) {
  _0x3a0bc2 = _0x3a0bc2.replace(/^@/, '');
  const _0x2e793d = await (await _0x3e64a6('https://dumpor.com/v/' + _0x3a0bc2)).text();
  const _0xde4576 = _0xf85905.load(_0x2e793d);
  const _0x14ff71 = _0xde4576("div.user__title > a > h1").text().trim();
  const _0xc30c04 = _0xde4576("div.user__title > h4").text().trim();
  const _0x1aca7d = _0xde4576("div.user__info-desc").text().trim();
  const _0x266f9c = _0xde4576("div.user__img").attr("style")?.["replace"]("background-image: url('", '')["replace"]("');", '');
  const _0x460da5 = _0xde4576("#user-page > div.container > div > div > div:nth-child(1) > div > a");
  const _0xebbfc7 = _0x460da5.eq(0x0).text().replace(/Posts/i, '').trim();
  const _0x52ad58 = _0x460da5.eq(0x2).text().replace(/Followers/i, '').trim();
  const _0x1b6476 = _0x460da5.eq(0x3).text().replace(/Following/i, '').trim();
  const _0x4ecd71 = _0xde4576("ul.list > li.list__item");
  const _0x54ee6e = parseInt(_0x4ecd71.eq(0x0).text().replace(/Posts/i, '').trim().replace(/\s/g, ''));
  const _0x39d01b = parseInt(_0x4ecd71.eq(0x1).text().replace(/Followers/i, '').trim().replace(/\s/g, ''));
  const _0xba97c2 = parseInt(_0x4ecd71.eq(0x2).text().replace(/Following/i, '').trim().replace(/\s/g, ''));
  return {
    name: _0x14ff71,
    username: _0xc30c04,
    description: _0x1aca7d,
    postsH: _0xebbfc7,
    posts: _0x54ee6e,
    followersH: _0x52ad58,
    followers: _0x39d01b,
    followingH: _0x1b6476,
    following: _0xba97c2,
    profilePic: _0x266f9c
  };
}
async function xnxxdl(_0x4ced3c) {
  try {
    const _0x6385f6 = await _0x3e64a6(_0x4ced3c);
    const _0x570089 = await _0x6385f6.text();
    const _0x58de88 = _0xf85905.load(_0x570089);
    const _0x5a205f = _0x58de88("#video-player-bg > script:nth-child(6)").html();
    const _0x4e5a96 = {
      low: (_0x5a205f.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
      high: _0x5a205f.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
      HLS: _0x5a205f.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1]
    };
    return _0x4e5a96;
  } catch (_0x322bfb) {
    console.error(_0x322bfb);
    return null;
  }
}
async function xnxxSearch(_0x58b8be) {
  const _0x5f5b5e = await _0x3e64a6("https://www.xnxx.com/search/" + _0x58b8be + '/' + (Math.floor(Math.random() * 0x3) + 0x1), {
    method: 'get'
  });
  const _0xf396b = await _0x5f5b5e.text();
  const _0x251c69 = _0xf85905.load(_0xf396b, {
    xmlMode: false
  });
  let _0x57c20f = [];
  _0x251c69("div.mozaique").each(function (_0x50cb8d, _0x5b2ed4) {
    const _0x346297 = _0x251c69(_0x5b2ed4).find("div.thumb a").map((_0x40f1c0, _0x10be25) => 'https://www.xnxx.com' + _0x251c69(_0x10be25).attr("href").replace("/THUMBNUM/", '/')).get();
    const _0x105025 = _0x251c69(_0x5b2ed4).find("div.thumb-under a").map((_0x17dbd9, _0x1d7567) => _0x251c69(_0x1d7567).attr("title")).get();
    for (let _0x215346 = 0x0; _0x215346 < _0x346297.length; _0x215346++) {
      _0x57c20f.push({
        title: _0x105025[_0x215346],
        link: _0x346297[_0x215346]
      });
    }
  });
  return _0x57c20f;
}
async function ChatGpt(_0xe20f1f, _0x344017) {
  const _0x23be9d = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Referer: "https://2chat.c3r.ink/",
      accept: "application/json, text/plain, */*"
    },
    body: JSON.stringify({
      prompt: _0xe20f1f,
      options: {},
      regenerate: false,
      roomId: 0x3ea,
      uuid: Date.now(),
      systemMessage: _0x344017,
      top_p: 0x1,
      temperature: 0.8
    })
  };
  const _0x478037 = await _0x3e64a6("https://chatapicn.a3r.fun/api/chat-process", _0x23be9d);
  const _0x1a83a0 = await _0x478037.text();
  let _0x10afe7 = JSON.parse(_0x1a83a0.split("\n").pop());
  return _0x10afe7;
}
async function xvideosSearch(_0x28993e) {
  return new Promise(async _0x610d9 => {
    const _0x2f9041 = await _0x1446b3.request("https://www.xvideos.com/?k=" + _0x28993e + "&p=" + (Math.floor(Math.random() * 0x9) + 0x1), {
      method: "get"
    });
    const _0x585cba = _0xf85905.load(_0x2f9041.data, {
      xmlMode: false
    });
    const _0x275f00 = [];
    const _0x437564 = [];
    const _0x6d294b = [];
    const _0x51afd2 = [];
    const _0x518839 = [];
    const _0x5d18a0 = [];
    _0x585cba("div.mozaique > div > div.thumb-under > p.title").each(function (_0x12af35, _0x1d32eb) {
      _0x275f00.push(_0x585cba(this).find('a').attr("title"));
      _0x437564.push(_0x585cba(this).find('span.duration').text());
      _0x51afd2.push('https://www.xvideos.com' + _0x585cba(this).find('a').attr('href'));
    });
    _0x585cba("div.mozaique > div > div.thumb-under").each(function (_0x10ee54, _0x1189d2) {
      _0x6d294b.push(_0x585cba(this).find("span.video-hd-mark").text());
    });
    _0x585cba("div.mozaique > div > div > div.thumb > a").each(function (_0x1f8b18, _0x5a6c0d) {
      _0x518839.push(_0x585cba(this).find('img').attr("data-src"));
    });
    for (let _0x3e4544 = 0x0; _0x3e4544 < _0x275f00.length; _0x3e4544++) {
      _0x5d18a0.push({
        title: _0x275f00[_0x3e4544],
        duration: _0x437564[_0x3e4544],
        quality: _0x6d294b[_0x3e4544],
        thumb: _0x518839[_0x3e4544],
        url: _0x51afd2[_0x3e4544]
      });
    }
    _0x610d9(_0x5d18a0);
  });
}
async function xvideosdl(_0x39ce66) {
  return new Promise(async _0xe91861 => {
    const _0x375a57 = await _0x3e64a6(_0x39ce66, {
      method: "get"
    });
    const _0x4ebd5f = await _0x375a57.text();
    const _0x3e2585 = _0xf85905.load(_0x4ebd5f, {
      xmlMode: false
    });
    const _0x47a542 = _0x3e2585("meta[property='og:title']").attr("content");
    const _0xd0dfe7 = _0x3e2585("meta[name='keywords']").attr("content");
    const _0x404174 = _0x3e2585("div#video-tabs > div > div > div > div > strong.mobile-hide").text() + " views";
    const _0x4e685d = _0x3e2585("div.rate-infos > span.rating-total-txt").text();
    const _0x4799de = _0x3e2585('span.rating-good-nbr').text();
    const _0x262293 = _0x3e2585("span.rating-bad-nbr").text();
    const _0x1a15c1 = _0x3e2585("meta[property='og:image']").attr("content");
    const _0x28b42c = _0x3e2585("#html5video > #html5video_base > div > a").attr("href");
    _0xe91861({
      status: 0xc8,
      result: {
        title: _0x47a542,
        url: _0x28b42c,
        keyword: _0xd0dfe7,
        views: _0x404174,
        vote: _0x4e685d,
        likes: _0x4799de,
        dislikes: _0x262293,
        thumb: _0x1a15c1
      }
    });
  });
}
export { sekaikomikDl, facebookDl, tiktokStalk, igStalk, xnxxdl, xnxxSearch, ChatGpt, xvideosSearch, xvideosdl };