// German and English for the one-pager. The German texts live in index.html (also the version without JavaScript);
// this file holds the English ones and switches between both. The head script in index.html has already chosen the
// language (?lang=, the visitor's earlier choice, the browser's languages); the DE/EN buttons change and remember it.
(function () {
  'use strict';

  var english = {
    'meta.title': 'LinienZauber (Line Magic) – Experience graph theory through play',
    'meta.description': 'LinienZauber is a calm puzzle game for Mac, iPhone and iPad: Euler trails, Hamilton paths, shortest paths, Steiner trees, the travelling salesman, path finder, four-colour magic and planar graphs in glowing neon worlds.',
    'meta.og': 'Every edge. One stroke. Your path. Experience graph theory through play.',
    'nav.skip': 'Skip to content',
    'nav.label': 'Main navigation',
    'nav.language': 'Language',
    'nav.modes': 'Game modes',
    'nav.features': 'Highlights',
    'nav.privacy': 'Privacy',
    'nav.legal': 'Privacy & legal notice',
    'nav.privacyUrl': 'privacy.html',
    'hero.eyebrow': 'A puzzle game for Mac, iPhone and iPad',
    // The brand stays German everywhere; English visitors see what it means.
    'hero.alias': 'Line Magic',
    'hero.tagline': 'Every edge. One stroke. Your path.',
    'hero.lead': 'Experience graph theory through play.',
    'hero.cta': 'Discover the game modes',
    'hero.more': 'What makes it special',
    'hero.testflight': 'Try it in TestFlight',
    'hero.animation': 'The house of Santa Claus is drawn in a single stroke',
    'hero.caption': 'The house of Santa Claus – eight edges, one stroke.',
    'shot.intro': 'LinienZauber title screen: a glowing figure above an evening city of towers shaped like the house of Santa Claus, with a full moon',
    'shot.modes': 'The mode selection with eight cards: Euler trails, Shortest paths, Hamilton paths, Steiner trees, Travelling salesman, Path finder, Colouring and Planar graphs',
    'shot.euler': 'Figure overview of the Euler trails with the Moroccan star, the house of Santa Claus and more figures',
    'shot.paths': 'A level of the route planner: a road map with start S, goal Z, closed roads and the route driven so far',
    'shot.hamilton': 'Figure overview of the Hamilton paths with the triangle with a flag, the house, the wheel, the ladder and the star',
    'shot.steiner': 'Steiner trees: a grid with red and blue dots that are each to be joined into one net',
    'shot.tsp': 'Travelling salesman: five cities on the Ruhr on a map, to be visited on one round trip',
    'shot.pathfinder': 'Path finder: a five-by-five grid with pairs of red, blue and green dots',
    'shot.colour': 'Four-colour magic: a solved triangle with a blue, a pink and a yellow node in front of a flower meadow at sunrise',
    'shot.planar': 'Planar graphs: a tangled pentagon whose crossing edges glow red',
    'about.title': 'Easy to learn, beautiful to master',
    'about.text': 'LinienZauber is a calm puzzle game for Mac, iPhone and iPad. Glowing glass tubes connect nodes into figures – from the classic “house of Santa Claus” to winding star paths. The task sounds simple: draw every line exactly once without lifting your finger. Behind it lies real mathematics that you discover along the way.',
    'about.modes': 'game modes',
    'about.levels': 'levels',
    'about.platforms': 'platforms',
    'modes.title': 'Eight game modes',
    'modes.lead': 'Eight kinds of puzzles from graph theory, each with its own world, its own music and its own figure overview.',
    'mode.euler.title': 'Euler trails',
    'mode.euler.text': '58 figures in four worlds: Classics, Advanced, Star paths and Connections. Use every edge exactly once. Crossings are not nodes, and LinienZauber warns you before you walk into a dead end.',
    'mode.paths.title': 'Shortest paths',
    'mode.paths.text': '40 road maps like a route planner, the second half on real German regions from the Ruhr to Thuringia: a road is as long as it is drawn. Plan the shortest route from S to Z, with stops on the way and around roadworks – with haptics, horn and engine sounds.',
    'mode.hamilton.title': 'Hamilton paths',
    'mode.hamilton.text': '20 graphs from the triangle to the dodecahedron of Hamilton’s own game. Visit every node exactly once – sometimes returning to the start. LinienZauber spots a dead end before you walk into it.',
    'mode.steiner.title': 'Steiner trees',
    'mode.steiner.text': '20 grids with components and pins in several colours. Connect all pins of the same colour into a minimal, branching net – pull, shift and straighten traces just like PCB layout on a real circuit board.',
    'mode.tsp.title': 'Travelling salesman',
    'mode.tsp.text': '20 round trips through real German cities, from five to fourteen places. Visit every city once and drive back to the start – on the shortest round trip. Whoever always drives to the nearest city loses.',
    'mode.pathfinder.title': 'Path finder',
    'mode.pathfinder.text': '20 grids up to 8 × 8 with pairs of the same colour. Connect every pair with a path, pulling and shifting curves as you like without two paths touching. Every level has exactly one solution.',
    'mode.colour.title': 'Four-colour magic',
    'mode.colour.text': '20 levels with four neon colours. Colour the nodes so that no edge joins two nodes of the same colour. As a colour master, you solve it with the smallest possible number of colours.',
    'mode.planar.title': 'Planar graphs – Untangle',
    'mode.planar.text': '20 tangled graphs. Move only the nodes until no two lines cross.',
    'features.title': 'Highlights',
    'feature.music.title': 'Every figure sounds',
    'feature.music.text': 'Each edge you draw plays a chord, and every figure has its own progression. Every mode has its own piano soundtrack, discreet effects and a “done” chime – chords, effects and soundtrack can be switched separately.',
    'feature.worlds.title': 'Living worlds',
    'feature.worlds.text': 'An evening city of towers shaped like the house of Santa Claus, villages and flower meadows at sunrise, and a slow change from day to night with a sense of depth.',
    'feature.proven.title': 'Proven levels',
    'feature.proven.text': 'Every level is checked mathematically before you play it: colouring and untangling with a solver, routes and round trips by exhaustive search, path-finder grids for exactly one solution. Every level can be solved.',
    'feature.input.title': 'Finger, pencil, mouse',
    'feature.input.text': 'Made for fingers, Apple Pencil, mouse and keyboard. Progress, best times and unfinished moves are saved.',
    'feature.language.title': 'German and English',
    'feature.language.text': 'The whole game is available in German and English.',
    'feature.calm.title': 'Calm and fair',
    'feature.calm.text': 'No time limit: in Euler trails undo costs five seconds on the clock, a hint thirty – and every restart keeps your best time.',
    'nav.scoring': 'Scoring',
    'scoring.title': 'Scoring',
    'scoring.lead': 'Every solved level earns points, and faster solutions earn more. There is no time limit, and points are never lost.',
    'scoring.points.title': 'Points',
    'scoring.points.text': 'Every solved level earns 100 points. You get one more point for every full second your best time stays under 100 seconds. Solved in 37 seconds, that makes 163 points.',
    'scoring.best.title': 'Time and best time',
    'scoring.best.text': 'The clock only starts when you set the first edge or make the first move. It stops while the game is in the background or the setup is open, and goes on with your next move. Your best time counts for each level: solve it faster and your points go up, a slower attempt costs nothing.',
    'scoring.penalty.title': 'Penalty time in Euler trails',
    'scoring.penalty.text': 'In Euler trails, penalty time goes on the clock: 10 seconds for an invalid move, 5 for undo and 30 for a hint. A solution without penalty time is perfect. In the other modes only the plain time counts.',
    'scoring.daily.title': 'Daily puzzle and 5-puzzle run',
    'scoring.daily.text': 'Both belong to the Euler trails. The daily puzzle is the same for everyone for one day. In the 5-puzzle run you solve five figures in a row and the times add up. Without penalty time the run also counts as perfect.',
    'scoring.rewards.title': 'Achievements',
    'scoring.rewards.text': 'There are 20 achievements: for the first level of each mode, for all levels of a mode, for 10, 50 and 100 levels and for the whole game.',
    'scoring.boards.title': 'Leaderboards',
    'scoring.boards.text': 'With Game Center your points per mode go on a leaderboard, as do the daily puzzle and the 5-puzzle run. Without Game Center everything counts the same, and you see it under Progress.',
    'footer.credit': 'A game by Stefan Opfermann · © Stefan Opfermann 2026 · Updated 1 Nov 2026, 18:44 CET',
    'footer.privacy': 'This page sets no cookies and loads nothing from other servers.'
  };

  var storageKey = 'LinienZauber-lang';
  var textNodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var attrNodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n-attr]'));
  // The German originals, read once from the page, so switching back needs no second copy.
  var germanText = textNodes.map(function (node) { return node.innerHTML; });
  var germanAttrs = attrNodes.map(function (node) {
    return node.getAttribute('data-i18n-attr').split(';').map(function (pair) {
      var parts = pair.split(':');
      return { name: parts[0], key: parts[1], value: node.getAttribute(parts[0]) };
    });
  });

  function apply(lang) {
    textNodes.forEach(function (node, index) {
      var key = node.getAttribute('data-i18n');
      node.innerHTML = lang === 'en' && english[key] ? english[key] : germanText[index];
    });
    attrNodes.forEach(function (node, index) {
      germanAttrs[index].forEach(function (attr) {
        node.setAttribute(attr.name, lang === 'en' && english[attr.key] ? english[attr.key] : attr.value);
      });
    });
    document.documentElement.lang = lang;
    Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (button) {
      button.setAttribute('aria-pressed', String(button.getAttribute('data-lang') === lang));
    });
    document.documentElement.classList.remove('i18n-pending');
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-lang]'), function (button) {
    button.addEventListener('click', function () {
      var lang = button.getAttribute('data-lang');
      try { localStorage.setItem(storageKey, lang); } catch (e) {}
      // A ?lang= in the address would otherwise win on the next visit; keep the address in step with the choice.
      try {
        var url = new URL(location.href);
        if (url.searchParams.has('lang')) { url.searchParams.set('lang', lang); history.replaceState(null, '', url); }
      } catch (e) {}
      apply(lang);
    });
  });

  apply(document.documentElement.lang === 'en' ? 'en' : 'de');
})();
