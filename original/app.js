(function () {
  "use strict";

  const assets = window.PAWN_ORIGINAL_ASSETS;
  const strings = assets.strings;
  const updatedImages = [
    { id: "path", src: "../images/updated/path.jpg" },
    { id: "forest", src: "../images/updated/forest.jpg" },
    { id: "plain", src: "../images/updated/plain.jpg" },
    { id: "hills", src: "../images/updated/hills.jpg" },
    { id: "gardens", src: "../images/updated/gardens.jpg" },
    { id: "gatehouse", src: "../images/updated/gatehouse.jpg" },
    { id: "bridge", src: "../images/updated/bridge.jpg" },
    { id: "hut", src: "../images/updated/hut.jpg" },
    { id: "boulders", src: "../images/updated/boulders.jpg" },
    { id: "library", src: "../images/updated/library.jpg" },
    { id: "bedroom", src: "../images/updated/bedroom.jpg" },
    { id: "laboratory", src: "../images/updated/laboratory.jpg" },
    { id: "hell", src: "../images/updated/hell.jpg" },
    { id: "tower", src: "../images/updated/tower.jpg" },
    { id: "tunnel", src: "../images/updated/tunnel.jpg" },
    { id: "cave", src: "../images/updated/cave.jpg" },
    { id: "ice", src: "../images/updated/ice.jpg" },
    { id: "lava", src: "../images/updated/lava.jpg" },
    { id: "treasure", src: "../images/updated/treasure.jpg" },
    { id: "snowman", src: "../images/updated/snowman.jpg" },
    { id: "placeholder", src: "../images/updated/placeholder.svg" }
  ];
  const imageById = new Map(updatedImages.map((image) => [image.id, image]));

  const rooms = {
    path0: {
      title: "On The Path",
      text: 0,
      image: "path",
      exits: { north: "path11", east: "plain13", west: "forest4", south: "path1" }
    },
    path1: {
      title: "On The Path",
      text: 1,
      image: "path",
      exits: { north: "path0", east: "plain14", west: "forest5", south: "path2" }
    },
    path2: {
      title: "On The Path",
      text: 2,
      image: "path",
      exits: { north: "path1", east: "plain15", west: "forest5" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    void3: {
      title: "Void",
      text: 3,
      image: "placeholder",
      exits: {}
    },
    forest4: {
      title: "Forest",
      text: 4,
      image: "forest",
      exits: { east: "path0", south: "forest5" }
    },
    forest5: {
      title: "Forest",
      text: 5,
      image: "forest",
      exits: { east: "path2", north: "forest4", west: "forest6" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    forest6: {
      title: "Clearing",
      text: 6,
      image: "forest",
      exits: { east: "forest5", north: "forest8", south: "forest7" }
    },
    forest7: {
      title: "Forest",
      text: 7,
      image: "forest",
      exits: { north: "forest6" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    forest8: {
      title: "Forest",
      text: 8,
      image: "forest",
      exits: { south: "forest6", east: "forest9" }
    },
    forest9: {
      title: "Forest",
      text: 9,
      image: "forest",
      exits: { west: "forest8", east: "forest10" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    forest10: {
      title: "Forest",
      text: 10,
      image: "forest",
      exits: { north: "moor26", east: "path11" }
    },
    path11: {
      title: "On The Path",
      text: 11,
      image: "path",
      exits: { north: "path12", northwest: "moor26", east: "plain13", south: "path0" }
    },
    path12: {
      title: "On The Path",
      text: 12,
      image: "path",
      exits: { north: "foothills27", west: "hills23", east: "plain13", south: "path11" }
    },
    plain13: {
      title: "Plain",
      text: 13,
      image: "plain",
      exits: { west: "path12", east: "plain14", north: "cliff18" }
    },
    plain14: {
      title: "Wilderness",
      text: 14,
      image: "plain",
      exits: { west: "plain13", south: "plain15" }
    },
    plain15: {
      title: "Plain",
      text: 15,
      image: "plain",
      exits: { west: "path2", north: "plain14" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    bank16: {
      title: "Bank",
      text: 16,
      image: "bridge",
      exits: { west: "plain14", east: "bridge17", north: "cliff18" },
      blocked: { south: "The dense, swirling fog marks the edge of this static reconstruction." }
    },
    bridge17: {
      title: "Stone Bridge",
      text: 17,
      image: "bridge",
      exits: { west: "bank16", east: "bridge19" }
    },
    cliff18: {
      title: "Cliff",
      text: 18,
      image: "bridge",
      exits: { west: "plain13", east: "bridge17", south: "bank16" }
    },
    bridge19: {
      title: "On The Bridge",
      text: 19,
      image: "bridge",
      exits: { west: "bridge17", east: "gardens20" }
    },
    gardens20: {
      title: "Gardens",
      text: 20,
      image: "gardens",
      exits: { west: "bridge19", east: "gateway21", southwest: "shed29" }
    },
    gateway21: {
      title: "Gateway",
      text: 21,
      image: "gatehouse",
      exits: { west: "gardens20", east: "maze22" }
    },
    maze22: {
      title: "Maze",
      text: 22,
      image: "tunnel",
      exits: { west: "gateway21" }
    },
    hills23: {
      title: "Hills",
      text: 23,
      image: "hills",
      exits: { north: "foothills27", west: "hills24", northwest: "hill25", east: "path12" }
    },
    hills24: {
      title: "Hills",
      text: 24,
      image: "hills",
      exits: { north: "hill25", east: "hills23", west: "moor26" }
    },
    hill25: {
      title: "Hill",
      text: 25,
      image: "hills",
      exits: { north: "foothills27", south: "hills24", in: "hut28" }
    },
    moor26: {
      title: "Hills",
      text: 26,
      image: "hills",
      exits: { north: "hills24", east: "hill25", south: "forest10", west: "forest10" }
    },
    foothills27: {
      title: "Foothills",
      text: 27,
      image: "boulders",
      exits: { south: "path12", northwest: "track80" }
    },
    hut28: {
      title: "Inside The Hut",
      text: 28,
      image: "hut",
      exits: { out: "hill25", south: "hill25" }
    },
    shed29: {
      title: "In The Shed",
      text: 29,
      image: "placeholder",
      exits: { northeast: "gardens20", out: "gardens20" }
    },
    track80: {
      title: "Track",
      text: 80,
      image: "cave",
      exits: { southeast: "foothills27", northwest: "track81" }
    },
    track81: {
      title: "Track",
      text: 81,
      image: "cave",
      exits: { southeast: "track80", north: "track82" }
    },
    track82: {
      title: "Track",
      text: 82,
      image: "boulders",
      exits: { south: "track81" }
    }
  };
  const confirmedRoomCount = Object.keys(rooms).length;
  const mappedTextIndices = new Set(Object.values(rooms).map((room) => room.text));
  const excludedDraftTextIndices = new Set([620, 917, 942, 947, 1151]);
  const roomCandidateStarts = [
    "At this point",
    "The bridge here",
    "This a ",
    "This cavern",
    "This chamber",
    "This passage leads",
    "This seems",
    "You are ",
    "You are now",
    "This is ",
    "You find yourself",
    "You have stumbled",
    "You recognise",
    "You're"
  ];

  function inferDraftTitle(text, index) {
    const lower = text.toLowerCase();
    if (lower.includes("forest")) return "Forest";
    if (lower.includes("path")) return "Path";
    if (lower.includes("plain") || lower.includes("wilderness")) return "Plain";
    if (lower.includes("hill") || lower.includes("moor")) return "Hills";
    if (lower.includes("track")) return "Track";
    if (lower.includes("plateau")) return "Plateau";
    if (lower.includes("tower")) return "Ice Tower";
    if (lower.includes("cave") || lower.includes("cavern")) return "Cave";
    if (lower.includes("corridor") || lower.includes("passage")) return "Passage";
    if (lower.includes("laboratory")) return "Laboratory";
    if (lower.includes("store room") || lower.includes("store-room")) return "Store Room";
    if (lower.includes("workshop")) return "Workshop";
    if (lower.includes("room")) return "Room";
    if (lower.includes("ledge")) return "Ledge";
    if (lower.includes("bridge")) return "Bridge";
    if (lower.includes("lift")) return "Lift";
    if (lower.includes("office")) return "Office";
    return `Original Scene ${padTextIndex(index)}`;
  }

  function inferImageFromText(text, title = "") {
    const haystack = `${title} ${text}`.toLowerCase();
    const rules = [
      ["forest", /forest|clearing|stump/],
      ["bridge", /bridge|bank|cliff|ravine/],
      ["gardens", /garden|fountain|rose/],
      ["gatehouse", /gatehouse|gateway|palace/],
      ["hut", /hut|shed/],
      ["boulders", /foothill|boulder|rockface|rocky/],
      ["hills", /hill|moor|mountain|ledge/],
      ["plain", /plain|wilderness|grass/],
      ["tunnel", /maze|tunnel|passage|corridor|shaft/],
      ["cave", /cave|cavern|track/],
      ["library", /library|bookcase|books/],
      ["bedroom", /bedroom|princess|bed/],
      ["laboratory", /laboratory|limbeck|flask|alchemist/],
      ["tower", /tower|platform|kronos/],
      ["ice", /ice|snow|plateau/],
      ["snowman", /snowman/],
      ["lava", /lava|fire|hell|demon/],
      ["treasure", /treasure|gold|dragon/],
      ["path", /path/]
    ];
    const match = rules.find(([, pattern]) => pattern.test(haystack));
    return match ? match[0] : "placeholder";
  }

  function seedCandidateRooms() {
    strings.forEach((text, index) => {
      if (mappedTextIndices.has(index)) {
        return;
      }
      if (excludedDraftTextIndices.has(index)) {
        return;
      }
      if (!roomCandidateStarts.some((start) => text.startsWith(start))) {
        return;
      }
      const title = inferDraftTitle(text, index);
      rooms[`draft${padTextIndex(index)}`] = {
        title,
        text: index,
        image: inferImageFromText(text, title),
        exits: {},
        draft: true,
        notes: "Seeded from the decoded string table. Exits and state rules still need manual mapping."
      };
    });
  }

  seedCandidateRooms();

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
  const sceneSelectEl = document.getElementById("sceneSelect");
  const loadSceneButtonEl = document.getElementById("loadSceneButton");
  const sceneCountEl = document.getElementById("sceneCount");
  const sceneMessagesEl = document.getElementById("sceneMessages");
  const sceneInteractionsEl = document.getElementById("sceneInteractions");
  const sceneResponseListEl = document.getElementById("sceneResponseList");
  const sceneResponseCountEl = document.getElementById("sceneResponseCount");

  let currentRoomId = "path0";
  let currentImageId = rooms[currentRoomId].image;
  let selectedTextIndex = rooms[currentRoomId].text;

  function padTextIndex(index) {
    return String(index).padStart(4, "0");
  }

  function normalizeImageId(value) {
    const text = String(value).trim();
    return /^\d+$/.test(text) ? text.padStart(2, "0") : text;
  }

  function roomText(roomId) {
    return strings[rooms[roomId].text] || "";
  }

  function roomOptionLabel(roomId) {
    const room = rooms[roomId];
    const status = room.draft ? "draft" : "mapped";
    return `${room.title} - ${roomId} - [${padTextIndex(room.text)}] - ${status}`;
  }

  function setImage(imageId) {
    const normalized = normalizeImageId(imageId);
    const image = imageById.get(normalized) || imageById.get("placeholder");
    if (!image) {
      appendEntry("system", `Image ${normalized} is not in the updated scene set.`);
      return false;
    }
    currentImageId = image.id;
    sceneImageEl.src = image.src;
    sceneImageEl.alt = `The Pawn scene artwork: ${image.id}`;
    imageIdEl.textContent = image.id;
    if (image.id === "placeholder" && normalized !== "placeholder") {
      appendEntry("system", `No updated image named ${normalized}; showing the placeholder.`);
    }
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
    updateDebugMenu();
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
      chip.textContent = room.draft ? "Exits not mapped yet" : "No mapped exits";
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
    appendEntry("system", room.draft ? "That exit is not mapped yet for this seeded scene." : "No mapped exit that way.");
    updateDebugMenu();
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
      updateDebugMenu();
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

    if (verb === "coverage") {
      const draftCount = Object.values(rooms).filter((room) => room.draft).length;
      appendEntry("system", `${confirmedRoomCount} mapped scenes, ${draftCount} seeded scene candidates, ${strings.length} decoded text responses.`);
      return;
    }

    if (verb === "image" || verb === "pic" || verb === "picture") {
      if (setImage(rest)) {
        appendEntry("system", `Showing updated image ${currentImageId}.`);
        updateDebugMenu();
      }
      return;
    }

    if (verb === "text" || verb === "string") {
      const value = parseInt(rest, 10);
      if (setText(value)) {
        appendEntry("original", strings[value]);
        updateDebugMenu();
      }
      return;
    }

    if (verb === "find" || verb === "search") {
      const needle = rest.trim().toLowerCase();
      if (!needle) {
        appendEntry("system", "Usage: find fog");
        return;
      }
      const matches = strings
        .map((text, index) => ({ text, index }))
        .filter((item) => item.text.toLowerCase().includes(needle))
        .slice(0, 12)
        .map((item) => `[${padTextIndex(item.index)}] ${makePreview(item.text)}`);
      appendEntry("system", matches.length ? matches.join("\n") : `No decoded text matched "${rest}".`);
      updateDebugMenu();
      return;
    }

    if (verb === "help") {
      appendEntry("system", "Commands: north, south, east, west, northeast, northwest, southwest, look, exits, rooms, coverage, image path, image forest, image placeholder, text 0000, find fog, restart.");
      return;
    }

    appendEntry("system", "That command is not part of this static asset edition.");
    updateDebugMenu();
  }

  function initializeSceneSelect() {
    const fragment = document.createDocumentFragment();
    Object.keys(rooms).forEach((roomId) => {
      const option = document.createElement("option");
      option.value = roomId;
      option.textContent = roomOptionLabel(roomId);
      fragment.appendChild(option);
    });
    sceneSelectEl.replaceChildren(fragment);
    sceneCountEl.textContent = `${confirmedRoomCount} mapped / ${Object.keys(rooms).length} seeded`;
  }

  function updateSceneSelect() {
    if (sceneSelectEl.value !== currentRoomId) {
      sceneSelectEl.value = currentRoomId;
    }
  }

  function appendDebugMessage(label, text, options = {}) {
    const item = document.createElement("article");
    item.className = "debug-item";

    const heading = document.createElement("strong");
    heading.textContent = label;

    const body = document.createElement("p");
    body.textContent = text;

    item.append(heading, body);
    if (options.onRun) {
      const action = document.createElement("div");
      action.className = "debug-action";
      const caption = document.createElement("span");
      caption.textContent = options.caption || "";
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = options.buttonLabel || "Run";
      button.addEventListener("click", options.onRun);
      action.append(caption, button);
      item.appendChild(action);
    }
    sceneMessagesEl.appendChild(item);
  }

  function appendDebugInteraction(label, detail, command) {
    const item = document.createElement("article");
    item.className = "debug-item debug-action";

    const text = document.createElement("div");
    const heading = document.createElement("strong");
    heading.textContent = label;
    const body = document.createElement("span");
    body.textContent = detail;
    text.append(heading, body);

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = command;
    button.addEventListener("click", () => handleCommand(command));

    item.append(text, button);
    sceneInteractionsEl.appendChild(item);
  }

  function sceneResponseItems(room) {
    const exits = Object.entries(room.exits);
    const exitText = exits.map(([direction]) => direction).join(", ") || "No mapped exits.";
    const items = [
      {
        label: `Look [${padTextIndex(room.text)}]`,
        command: "look",
        text: strings[room.text] || "",
        type: "original",
        textIndex: room.text
      },
      {
        label: "Exits response",
        command: "exits",
        text: exitText,
        type: "system"
      }
    ];

    if (room.draft) {
      items.push({
        label: "Manual mapping status",
        command: "coverage",
        text: room.notes,
        type: "system"
      });
    }

    exits.forEach(([direction, targetRoomId]) => {
      const target = rooms[targetRoomId];
      items.push({
        label: `Go ${direction} -> ${target.title} [${padTextIndex(target.text)}]`,
        command: direction,
        text: strings[target.text] || "",
        type: "original",
        textIndex: target.text
      });
    });

    Object.entries(room.blocked || {}).forEach(([direction, message]) => {
      items.push({
        label: `Blocked ${direction}`,
        command: direction,
        text: message,
        type: "system"
      });
    });

    items.push(
      {
        label: "Fallback direction response",
        command: "up",
        text: "No mapped exit that way.",
        type: "system"
      },
      {
        label: "Fallback parser response",
        command: "xyzzy",
        text: "That command is not part of this static asset edition.",
        type: "system"
      }
    );

    return items;
  }

  function renderSceneResponses(room) {
    const items = sceneResponseItems(room);
    sceneResponseListEl.replaceChildren();
    sceneResponseCountEl.textContent = String(items.length);

    items.forEach((item) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "result-item";
      button.dataset.command = item.command;
      if (Number.isInteger(item.textIndex)) {
        button.dataset.textIndex = String(item.textIndex);
      }

      const label = document.createElement("strong");
      label.textContent = item.label;

      const preview = document.createElement("span");
      preview.textContent = `Command: ${item.command}. ${makePreview(item.text)}`;

      button.append(label, preview);
      button.addEventListener("click", () => appendEntry(item.type, item.text));
      sceneResponseListEl.appendChild(button);
    });

    updateActiveSceneResponse();
  }

  function updateActiveSceneResponse() {
    for (const button of sceneResponseListEl.querySelectorAll(".result-item")) {
      button.classList.toggle("active", Number(button.dataset.textIndex) === selectedTextIndex);
    }
  }

  function updateDebugMenu() {
    const room = rooms[currentRoomId];
    updateSceneSelect();
    sceneMessagesEl.replaceChildren();
    sceneInteractionsEl.replaceChildren();
    renderSceneResponses(room);

    appendDebugMessage(
      `Current description [${padTextIndex(room.text)}]`,
      strings[room.text] || ""
    );

    appendDebugMessage(
      "Current scene image",
      `${currentImageId} (${room.image === currentImageId ? "mapped" : `mapped: ${room.image}`})`,
      {
        caption: "Preview mapped image",
        buttonLabel: "Image",
        onRun: () => handleCommand(`image ${room.image}`)
      }
    );

    if (room.draft) {
      appendDebugMessage("Manual mapping status", room.notes);
    }

    appendDebugInteraction("Look", `Repeat [${padTextIndex(room.text)}].`, "look");
    appendDebugInteraction("Exits", Object.keys(room.exits).join(", ") || "No mapped exits.", "exits");

    Object.entries(room.exits).forEach(([direction, targetRoomId]) => {
      const target = rooms[targetRoomId];
      appendDebugMessage(
        `Exit ${direction} -> ${target.title} [${padTextIndex(target.text)}]`,
        strings[target.text] || "",
        {
          caption: `Command: ${direction}`,
          buttonLabel: "Go",
          onRun: () => handleCommand(direction)
        }
      );
      appendDebugInteraction(
        `Go ${direction}`,
        `${target.title} (${targetRoomId}) [${padTextIndex(target.text)}].`,
        direction
      );
    });

    Object.entries(room.blocked || {}).forEach(([direction, message]) => {
      appendDebugMessage(`Blocked ${direction}`, message, {
        caption: `Command: ${direction}`,
        buttonLabel: "Test",
        onRun: () => handleCommand(direction)
      });
      appendDebugInteraction(`Blocked ${direction}`, message, direction);
    });

    appendDebugMessage("Fallback direction response", "No mapped exit that way.", {
      caption: "Command: up",
      buttonLabel: "Test",
      onRun: () => handleCommand("up")
    });
    appendDebugMessage("Fallback parser response", "That command is not part of this static asset edition.", {
      caption: "Command: xyzzy",
      buttonLabel: "Test",
      onRun: () => handleCommand("xyzzy")
    });

    appendDebugInteraction("Invalid direction", "Exercises the generic no-exit response.", "up");
    appendDebugInteraction("Unknown command", "Exercises the generic parser response.", "xyzzy");
    appendDebugInteraction("Image placeholder", "Exercises missing-image fallback.", "image 04");
    appendDebugInteraction("Open text string", `Show current text [${padTextIndex(room.text)}] directly.`, `text ${padTextIndex(room.text)}`);
  }

  function makePreview(text) {
    const compact = text.replace(/\s+/g, " ").trim();
    return compact.length > 210 ? `${compact.slice(0, 207)}...` : compact;
  }

  commandFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const command = commandInputEl.value;
    commandInputEl.value = "";
    handleCommand(command);
  });

  function jumpToSelectedScene() {
    const roomId = sceneSelectEl.value;
    appendEntry("system", `Debug jump to ${roomOptionLabel(roomId)}.`);
    renderRoom(roomId);
    commandInputEl.focus();
  }

  sceneSelectEl.addEventListener("change", jumpToSelectedScene);
  loadSceneButtonEl.addEventListener("click", jumpToSelectedScene);

  initializeSceneSelect();
  renderRoom(currentRoomId, { log: false });
  appendEntry("original", roomText(currentRoomId));
}());
