const assistantData = {
  /* CORE ASSEMBLY */
  piston: {
    answer: "A **Piston** is a cylindrical component that moves up and down inside the engine's cylinder. It's pushed by the explosion of the air-fuel mixture, converting that energy into kinetic motion. It is the heart of the combustion process.",
    link: "parts.html"
  },
  crankshaft: {
    answer: "The **Crankshaft** sits at the bottom of the engine. It takes the linear (up-and-down) motion from the pistons and converts it into rotational motion—which eventually spins your wheels! It's the most high-stress component in the block.",
    link: "parts.html"
  },
  camshaft: {
    answer: "The **Camshaft** is responsible for opening and closing the engine's valves at exactly the right time. It's synchronized with the crankshaft via the timing belt or chain. Modern engines often have two (DOHC).",
    link: "parts.html"
  },
  valves: {
    answer: "Engine **Valves** act as gates. Intake valves allow air/fuel into the cylinder, and exhaust valves allow burnt gases to escape. They are precisely timed by the camshaft to maximize volumetric efficiency.",
    link: "parts.html"
  },
  'connecting rod': {
    answer: "The **Connecting Rod** (or Con-Rod) links the piston to the crankshaft. It must be incredibly strong yet light, as it changes direction thousands of times per minute at high RPMs.",
    link: "parts.html"
  },
  'cylinder head': {
    answer: "The **Cylinder Head** sits on top of the engine block. It contains the combustion chambers, valves, sparks plugs, and (in many engines) the camshafts. It's where the 'breathing' of the engine happens.",
    link: "parts.html"
  },
  flywheel: {
    answer: "A **Flywheel** is a heavy disk attached to the crankshaft. It stores kinetic energy to smooth out the power pulses of the cylinders and provides the surface for the clutch to engage.",
    link: "parts.html"
  },
  'oil pan': {
    answer: "The **Oil Pan** (or Sump) is the reservoir at the bottom of the engine that holds the motor oil. The oil pump sucks oil from here to lubricate the entire engine.",
    link: null
  },
  gasket: {
    answer: "A **Gasket** (like the Head Gasket) is a seal between two metal surfaces. It prevents fluids (oil/coolant) and gases from leaking out of the engine under high pressure.",
    link: null
  },

  /* VALVETRAIN */
  dohc: {
    answer: "**DOHC** (Double OverHead Cam) means there are two camshafts per cylinder bank—one for intake valves and one for exhaust. This allows for better airflow and higher RPM potential.",
    link: "about.html"
  },
  sohc: {
    answer: "**SOHC** (Single OverHead Cam) uses one camshaft to operate both intake and exhaust valves. It's simpler and lighter than DOHC but generally less efficient at high RPMs.",
    link: null
  },
  vvt: {
    answer: "**VVT** (Variable Valve Timing) allows the engine to change when the valves open and close based on RPM. This improves low-end torque and high-end horsepower at the same time.",
    link: null
  },
  'timing belt': {
    answer: "The **Timing Belt** (or Chain) synchronizes the rotation of the crankshaft and camshaft. If it breaks in an 'interference engine', the pistons will hit the valves, causing catastrophic damage.",
    link: "parts.html"
  },
  'rocker arm': {
    answer: "**Rocker Arms** are levers that translate the camshaft's motion into valve-opening motion. They 'rock' back and forth to push the valves down.",
    link: null
  },
  pushrod: {
    answer: "**Pushrod** engines (OHV) use long rods to move rocker arms from a camshaft located deep in the engine block. It's a classic, compact design used in many American V8s.",
    link: null
  },

  /* INDUCTION & EXHAUST */
  turbo: {
    answer: "A **Turbocharger** uses exhaust gases to spin a turbine, which forces more air into the engine. More air + more fuel = a much bigger explosion and significantly more power.",
    link: "engines.html"
  },
  supercharger: {
    answer: "A **Supercharger** is mechanically driven by the engine's belt (unlike a turbo). It provides instant boost without 'turbo lag', but draws some power from the engine to operate.",
    link: "engines.html"
  },
  intercooler: {
    answer: "An **Intercooler** is a heat exchanger that cools down the air compressed by a turbo or supercharger before it enters the engine. Cold air is denser and contains more oxygen for better combustion.",
    link: null
  },
  'wastegate': {
    answer: "A **Wastegate** is a valve that diverts exhaust gases away from the turbo's turbine to control the boost pressure and prevent the engine from over-boosting and exploding.",
    link: null
  },
  'blow-off valve': {
    answer: "A **Blow-Off Valve** (BOV) releases pressure from the intake system when you lift off the throttle. This prevents air from surging back into the turbo compressor.",
    link: null
  },
  'intake manifold': {
    answer: "The **Intake Manifold** is a series of tubes that distributes air (and sometimes fuel) evenly to each cylinder. Its shape affects the engine's torque curve.",
    link: "v8.html"
  },
  'exhaust manifold': {
    answer: "The **Exhaust Manifold** collects burnt gases from each cylinder and sends them into the exhaust pipe. High-performance versions are called 'Headers'.",
    link: "v8.html"
  },
  'catalytic converter': {
    answer: "A **Catalytic Converter** uses precious metals (like platinum) to convert toxic exhaust gases—like Carbon Monoxide—into less harmful gases like Carbon Dioxide and Water.",
    link: null
  },
  'egr valve': {
    answer: "The **EGR** (Exhaust Gas Recirculation) valve sends a portion of exhaust back to the intake to lower combustion temperatures and reduce NOx emissions.",
    link: null
  },

  /* FUEL & IGNITION */
  'fuel injector': {
    answer: "**Fuel Injectors** are precise nozzles that spray fuel into the intake or directly into the combustion chamber (GDI) at extremely high pressures.",
    link: "parts.html"
  },
  'spark plug': {
    answer: "A **Spark Plug** delivers an electric arc that ignites the compressed air-fuel mixture in the combustion chamber. It must withstand thousands of explosions per minute.",
    link: "parts.html"
  },
  'glow plug': {
    answer: "**Glow Plugs** are used in Diesel engines to pre-heat the combustion chamber, as diesel ignites via heat of compression rather than an electric spark.",
    link: null
  },
  carburetor: {
    answer: "A **Carburetor** is an older mechanical device that mixes air and fuel via vacuum. It was replaced by fuel injection for better efficiency and emissions control.",
    link: null
  },

  /* COOLING & LUBRICATION */
  radiator: {
    answer: "The **Radiator** is a heat exchanger. Hot coolant from the engine flows through it and is cooled by airflow (and a fan) before returning to the engine block.",
    link: "v8.html"
  },
  'water pump': {
    answer: "The **Water Pump** circulates coolant through the engine, radiator, and heater core. It's usually driven by the timing belt or accessory belt.",
    link: null
  },
  thermostat: {
    answer: "The **Thermostat** is a valve that stays closed until the engine reaches operating temperature. It then opens to allow coolant to flow to the radiator.",
    link: null
  },
  'oil pump': {
    answer: "The **Oil Pump** creates pressure to force motor oil between moving metal parts (like bearings and pistons) to prevent metal-on-metal contact and heat buildup.",
    link: "v8.html"
  },

  /* ENGINE LAYOUTS */
  v8: {
    answer: "A **V8** engine features 8 cylinders arranged in a 'V' shape. It is known for its high torque and signature 'v8 rumble'—the holy grail of performance for many enthusiasts.",
    link: "v8.html"
  },
  v6: {
    answer: "A **V6** engine has 6 cylinders in two banks of 3. It's a compact alternative to the V8, offering good power-to-weight and efficiency.",
    link: "engines.html"
  },
  i6: {
    answer: "The **Inline 6** (or I6) is a legendary layout with 6 cylinders in a row. It is naturally balanced due to its firing order, making it incredibly smooth.",
    link: "inline6.html"
  },
  i4: {
    answer: "The **Inline 4** is the most common engine in the world. It's efficient, compact, and powers everything from commuters to high-boost sports cars.",
    link: "inline4.html"
  },
  boxer: {
    answer: "A **Boxer** engine (Flat) has cylinders that lay horizontal and move away from each other. This creates a very low center of gravity, improving handling.",
    link: "engines.html"
  },
  rotary: {
    answer: "A **Rotary** (Wankel) engine has no pistons. Instead, a triangular rotor spins inside an oval chamber. It's tiny, high-revving, but consumes more oil and fuel.",
    link: "engines.html"
  },
  diesel: {
    answer: "**Diesel** engines use compression ignition rather than spark plugs. They have massive low-end torque and high efficiency, perfect for trucks and towing.",
    link: null
  },

  /* TECHNICAL CONCEPTS */
  displacement: {
    answer: "**Displacement** is the total volume of all cylinders in an engine (e.g., 5.0L). More displacement usually means more potential for power.",
    link: "compare.html"
  },
  'compression ratio': {
    answer: "The **Compression Ratio** is how much the engine squishes the air-fuel mixture. Higher compression makes more power but requires higher-octane fuel.",
    link: "compare.html"
  },
  horsepower: {
    answer: "**Horsepower** (HP) measures how fast an engine can perform work. It determines a car's top speed and overall performance at high RPM.",
    link: "compare.html"
  },
  torque: {
    answer: "**Torque** is the rotational force of the engine—the 'grunt' that gets you moving from a stop. Enthusiasts say: 'Horsepower sells cars, Torque wins races.'",
    link: "compare.html"
  },
  'firing order': {
    answer: "The **Firing Order** is the sequence in which cylinders ignite. It's designed to balance the engine and reduce vibration.",
    link: null
  },
  hemi: {
    answer: "A **HEMI** engine uses Hemispherical combustion chambers (domed). This design allows for larger valves and better airflow, leading to high-efficiency power.",
    link: null
  },

  default: {
    answer: "I'm not familiar with that term yet! Try asking about **DOHC**, **Pistons**, **Torque vs HP**, or **how a Turbo works**.",
    link: null
  }
};

const suggestions = [
  "What is a Piston?",
  "How does a Turbo work?",
  "Difference between HP and Torque?",
  "What is VVT?",
  "What is a DOHC engine?",
  "Why is the I6 balanced?",
  "What does a Wastegate do?"
];

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");
  const messages = document.getElementById("chat-messages");
  const suggestText = document.getElementById("suggest-text");

  // Rotating suggestion
  let suggIndex = 0;
  setInterval(() => {
    suggIndex = (suggIndex + 1) % suggestions.length;
    if (suggestText) suggestText.innerText = suggestions[suggIndex];
  }, 4000);

  // Send Event
  const sendMessage = () => {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, 'user');
    input.value = "";
    
    // Simulate thinking
    showTyping();
    setTimeout(() => {
      removeTyping();
      processInput(text);
    }, 800);
  };

  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  // Suggest Tags Event
  const updateSuggestClick = () => {
    document.querySelectorAll(".suggest-tag").forEach(tag => {
      tag.onclick = null; // Clean up
      tag.onclick = () => {
        input.value = tag.innerText;
        sendMessage();
      };
    });
  };
  updateSuggestClick();

  function addMessage(text, type) {
    const msg = document.createElement("div");
    msg.className = `message ${type}-msg`;
    // Bold bolding keywords
    msg.innerHTML = text.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--blue)">$1</strong>');
    messages.appendChild(msg);
    
    // Smooth scroll to bottom
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const typing = document.createElement("div");
    typing.className = "typing";
    typing.id = "typing-dots";
    typing.innerHTML = `<div class="dot"></div><div class="dot"></div><div class="dot"></div>`;
    messages.appendChild(typing);
    messages.scrollTop = messages.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById("typing-dots");
    if (t) t.remove();
  }

  function processInput(text) {
    const lower = text.toLowerCase();
    let match = "default";

    // Priority matching: check longer phrases first
    const keys = Object.keys(assistantData).sort((a,b) => b.length - a.length);

    for (const key of keys) {
      if (lower.includes(key)) {
        match = key;
        break;
      }
    }

    const data = assistantData[match];
    let response = data.answer;
    
    // Added persona name "Rev" to responses randomly
    const startPhrases = ["REDLINE REPORT: ", "Analyzing telemetry... ", "Database ping: ", "Carbon Insight: ", ""];
    const start = startPhrases[Math.floor(Math.random() * startPhrases.length)];
    
    let finalHtml = start + response;

    if (data.link) {
      finalHtml += `<br><a href="${data.link}" class="link-chip" style="border-color:var(--red); color:var(--red); background:rgba(239,68,68,0.1)">🚀 VIEW IN 3D LIBRARY</a>`;
    }

    addMessage(finalHtml, 'bot');
  }
});
