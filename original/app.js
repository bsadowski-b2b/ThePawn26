(function () {
  "use strict";

  const assets = window.PAWN_ORIGINAL_ASSETS;
  const strings = assets.strings;
  const images = assets.images;
  const imageById = new Map(images.map((image) => [image.id, image]));

  const rooms = {
    path0: {
      title: "On The Path",
      text: 0,
      image: "04",
      exits: { north: "path11", east: "plain13", west: "forest4", south: "path1" }
    },
    path1: {
      title: "On The Path",
      text: 1,
      image: "04",
      exits: { north: "path0", east: "plain14", west: "forest5", south: "path2" }
    },
    path2: {
      title: "On The Path",
      text: 2,
      image: "04",
      exits: { north: "path1", east: "plain15", west: "forest5" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    void3: {
      title: "Void",
      text: 3,
      image: "02",
      exits: {}
    },
    forest4: {
      title: "Forest",
      text: 4,
      image: "05",
      exits: { east: "path0", south: "forest5" }
    },
    forest5: {
      title: "Forest",
      text: 5,
      image: "05",
      exits: { east: "path2", north: "forest4", west: "forest6" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    forest6: {
      title: "Clearing",
      text: 6,
      image: "05",
      exits: { east: "forest5", north: "forest8", south: "forest7" }
    },
    forest7: {
      title: "Forest",
      text: 7,
      image: "05",
      exits: { north: "forest6" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    forest8: {
      title: "Forest",
      text: 8,
      image: "05",
      exits: { south: "forest6", east: "forest9" }
    },
    forest9: {
      title: "Forest",
      text: 9,
      image: "05",
      exits: { west: "forest8", east: "forest10" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    forest10: {
      title: "Forest",
      text: 10,
      image: "05",
      exits: { north: "moor26", east: "path11" }
    },
    path11: {
      title: "On The Path",
      text: 11,
      image: "04",
      exits: { north: "path12", northwest: "moor26", east: "plain13", south: "path0" }
    },
    path12: {
      title: "On The Path",
      text: 12,
      image: "04",
      exits: { north: "foothills27", west: "hills23", east: "plain13", south: "path11" }
    },
    plain13: {
      title: "Plain",
      text: 13,
      image: "23",
      exits: { west: "path12", east: "plain14", north: "cliff18" }
    },
    plain14: {
      title: "Wilderness",
      text: 14,
      image: "24",
      exits: { west: "plain13", south: "plain15" }
    },
    plain15: {
      title: "Plain",
      text: 15,
      image: "23",
      exits: { west: "path2", north: "plain14" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    bank16: {
      title: "Bank",
      text: 16,
      image: "23",
      exits: { west: "plain14", east: "bridge17", north: "cliff18" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    bridge17: {
      title: "Stone Bridge",
      text: 17,
      image: "10",
      exits: { west: "bank16", east: "bridge19" }
    },
    cliff18: {
      title: "Cliff",
      text: 18,
      image: "10",
      exits: { west: "plain13", east: "bridge17", south: "bank16" }
    },
    bridge19: {
      title: "On The Bridge",
      text: 19,
      image: "10",
      exits: { west: "bridge17", east: "gardens20" }
    },
    gardens20: {
      title: "Gardens",
      text: 20,
      image: "00",
      exits: { west: "bridge19", east: "gateway21", southwest: "shed29" }
    },
    gateway21: {
      title: "Gateway",
      text: 21,
      image: "00",
      exits: { west: "gardens20", east: "maze22" }
    },
    maze22: {
      title: "Maze",
      text: 22,
      image: "13",
      exits: { west: "gateway21" }
    },
    hills23: {
      title: "Hills",
      text: 23,
      image: "24",
      exits: { north: "foothills27", west: "hills24", northwest: "hill25", east: "path12" }
    },
    hills24: {
      title: "Hills",
      text: 24,
      image: "24",
      exits: { north: "hill25", east: "hills23", west: "moor26" }
    },
    hill25: {
      title: "Hill",
      text: 25,
      image: "24",
      exits: { north: "foothills27", south: "hills24", in: "hut28" }
    },
    moor26: {
      title: "Hills",
      text: 26,
      image: "24",
      exits: { north: "hills24", east: "hill25", south: "forest10", west: "forest10" }
    },
    foothills27: {
      title: "Foothills",
      text: 27,
      image: "04",
      exits: { south: "path12", northwest: "track80" }
    },
    hut28: {
      title: "Inside The Hut",
      text: 28,
      image: "07",
      exits: { out: "hill25", south: "hill25" }
    },
    shed29: {
      title: "In The Shed",
      text: 29,
      image: "28",
      exits: { northeast: "gardens20", out: "gardens20" }
    },
    track80: {
      title: "Track",
      text: 80,
      image: "01",
      exits: { southeast: "foothills27", northwest: "track81" }
    },
    track81: {
      title: "Track",
      text: 81,
      image: "01",
      exits: { southeast: "track80", north: "track82" }
    },
    track82: {
      title: "Track",
      text: 82,
      image: "12",
      exits: { south: "track81" }
    }
  };

  const directionAliases = {
    n: "north",
    north: "north",
    ne: "northeast",
    northeast: "northeast",
    e: "east",
    east: "east",
    se: "southeast",
    southeast: "southeast",
    s: "south",
    south: "south",
    sw: "southwest",
    southwest: "southwest",
    w: "west",
    west: "west",
    nw: "northwest",
    northwest: "northwest",
    u: "up",
    up: "up",
    d: "down",
    down: "down",
    in: "in",
    enter: "in",
    out: "out",
    exit: "out"
  };

  const imageIdEl = document.getElementById("imageId");
  const textIdEl = document.getElementById("textId");
  const roomTitleEl = document.getElementById("roomTitle");
  const locationTextEl = document.getElementById("locationText");
  const sceneImageEl = document.getElementById("sceneImage");
  const exitListEl = document.getElementById("exitList");
  const transcriptEl = document.getElementById("transcript");
  const commandFormEl = document.getElementById("commandForm");
  const commandInputEl = document.getElementById("commandInput");
  const searchInputEl = document.getElementById("searchInput");
  const resultListEl = document.getElementById("resultList");
  const resultCountEl = document.getElementById("resultCount");

  let currentRoomId = "path0";
  let currentImageId = rooms[currentRoomId].image;
  let selectedTextIndex = rooms[currentRoomId].text;

  function padTextIndex(index) {
    return String(index).padStart(4, "0");
  }

  function padImageId(value) {
    return String(value).padStart(2, "0");
  }

  function roomText(roomId) {
    return strings[rooms[roomId].text] || "";
  }

  function setImage(imageId) {
    const normalized = padImageId(imageId);
    const image = imageById.get(normalized);
    if (!image) {
      appendEntry("system", `Image ${normalized} is not in the extracted set.`);
      return false;
    }
    currentImageId = normalized;
    sceneImageEl.src = image.src;
    sceneImageEl.alt = `Original Commodore 64 illustration ${normalized}`;
    imageIdEl.textContent = normalized;
    return true;
  }

  function setText(index, title) {
    const numeric = Number(index);
    if (!Number.isInteger(numeric) || numeric < 0 || numeric >= strings.length) {
      appendEntry("system", `Text ${index} is outside the decoded table.`);
      return false;
    }
    selectedTextIndex = numeric;
    textIdEl.textContent = padTextIndex(numeric);
    roomTitleEl.textContent = title || `String ${padTextIndex(numeric)}`;
    locationTextEl.textContent = strings[numeric];
    updateActiveResult();
    return true;
  }

  function renderRoom(roomId, options = {}) {
    const room = rooms[roomId];
    if (!room) {
      appendEntry("system", "That mapped location is not available.");
      return;
    }
    currentRoomId = roomId;
    setImage(room.image);
    setText(room.text, room.title);
    renderExits(room);
    if (options.log !== false) {
      appendEntry("original", roomText(roomId));
    }
  }

  function renderExits(room) {
    exitListEl.replaceChildren();
    const exitNames = Object.keys(room.exits);
    if (!exitNames.length) {
      const chip = document.createElement("span");
      chip.className = "exit-chip";
      chip.textContent = "No mapped exits";
      exitListEl.appendChild(chip);
    }
    for (const direction of exitNames) {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = direction;
      button.addEventListener("click", () => handleCommand(direction));
      exitListEl.appendChild(button);
    }

    const lookButton = document.createElement("button");
    lookButton.type = "button";
    lookButton.className = "look-button";
    lookButton.textContent = "Look";
    lookButton.addEventListener("click", () => handleCommand("look"));
    exitListEl.appendChild(lookButton);
  }

  function appendEntry(type, text) {
    const entry = document.createElement("p");
    entry.className = `entry ${type}`;
    entry.textContent = text;
    transcriptEl.appendChild(entry);
    transcriptEl.scrollTop = transcriptEl.scrollHeight;
  }

  function move(direction) {
    const room = rooms[currentRoomId];
    const target = room.exits[direction];
    if (target) {
      renderRoom(target);
      return;
    }
    if (room.blocked && room.blocked[direction]) {
      appendEntry("system", room.blocked[direction]);
      return;
    }
    appendEntry("system", "No mapped exit that way.");
  }

  function normalizeCommand(rawCommand) {
    return rawCommand.trim().toLowerCase().replace(/\s+/g, " ");
  }

  function handleCommand(rawCommand) {
    const normalized = normalizeCommand(rawCommand);
    if (!normalized) {
      return;
    }

    appendEntry("command", `> ${rawCommand}`);

    const parts = normalized.split(" ");
    const verb = parts[0];
    const rest = parts.slice(1).join(" ");

    if (directionAliases[verb] && parts.length === 1) {
      move(directionAliases[verb]);
      return;
    }

    if ((verb === "go" || verb === "walk" || verb === "move") && directionAliases[parts[1]]) {
      move(directionAliases[parts[1]]);
      return;
    }

    if (verb === "look" || verb === "l") {
      renderRoom(currentRoomId);
      return;
    }

    if (verb === "exits") {
      appendEntry("system", Object.keys(rooms[currentRoomId].exits).join(", ") || "No mapped exits.");
      return;
    }

    if (verb === "restart") {
      renderRoom("path0");
      return;
    }

    if (verb === "rooms") {
      appendEntry("system", Object.values(rooms).map((room) => `${room.title} [${padTextIndex(room.text)}]`).join(" | "));
      return;
    }

    if (verb === "image" || verb === "pic" || verb === "picture") {
      if (setImage(rest)) {
        appendEntry("system", `Showing original image ${padImageId(rest)}.`);
      }
      return;
    }

    if (verb === "text" || verb === "string") {
      const value = parseInt(rest, 10);
      if (setText(value)) {
        appendEntry("original", strings[value]);
      }
      return;
    }

    if (verb === "find" || verb === "search") {
      searchInputEl.value = rest;
      renderResults(rest);
      appendEntry("system", `${resultCountEl.textContent} matching strings.`);
      return;
    }

    if (verb === "help") {
      appendEntry("system", "Commands: north, south, east, west, northeast, northwest, southwest, look, exits, rooms, image 04, text 0000, find fog, restart.");
      return;
    }

    appendEntry("system", "That command is not part of this static asset edition.");
  }

  function makePreview(text) {
    const compact = text.replace(/\s+/g, " ").trim();
    return compact.length > 210 ? `${compact.slice(0, 207)}...` : compact;
  }

  function renderResults(query = "") {
    const needle = query.trim().toLowerCase();
    const allMatches = strings
      .map((text, index) => ({ text, index }))
      .filter((item) => !needle || item.text.toLowerCase().includes(needle));
    const matches = allMatches.slice(0, 80);

    resultListEl.replaceChildren();
    resultCountEl.textContent = String(allMatches.length);

    for (const item of matches) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "result-item";
      button.dataset.textIndex = String(item.index);

      const id = document.createElement("strong");
      id.textContent = `[${padTextIndex(item.index)}]`;

      const preview = document.createElement("span");
      preview.textContent = makePreview(item.text);

      button.append(id, preview);
      button.addEventListener("click", () => {
        setText(item.index);
        appendEntry("original", item.text);
      });
      resultListEl.appendChild(button);
    }

    if (allMatches.length > matches.length) {
      const note = document.createElement("p");
      note.className = "result-note";
      note.textContent = `Showing first ${matches.length} matches.`;
      resultListEl.appendChild(note);
    }

    updateActiveResult();
  }

  function updateActiveResult() {
    for (const button of resultListEl.querySelectorAll(".result-item")) {
      button.classList.toggle("active", Number(button.dataset.textIndex) === selectedTextIndex);
    }
  }

  commandFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = commandInputEl.value;
    commandInputEl.value = "";
    handleCommand(command);
  });

  searchInputEl.addEventListener("input", () => renderResults(searchInputEl.value));

  renderResults();
  renderRoom(currentRoomId, { log: false });
  appendEntry("original", roomText(currentRoomId));
}());
