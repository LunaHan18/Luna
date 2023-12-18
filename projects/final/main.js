document.addEventListener('DOMContentLoaded', function () {
    const tags = document.querySelectorAll('.tag');
    const clearButton = document.getElementById('clear-button');
    const gridContainer = document.getElementById('grid-container');

    // Sample image data
    const imageData = [
            { src: "./image/1.jpg", tags: "m", text: "Plane White|Carina Ow|Paris, France|2014" },
            { src: "./image/2.jpg", tags: "m", text: "Behaviours of Light|JNZNBRK|Winnipeg, Canada|2014" },
            { src: "./image/3.jpg", tags: "m", text: "Sculpture in Motion|FLUIDIC|Milan, Italy|2013" },
            { src: "./image/4.jpg", tags: "m l n", text: "Universe of Water Particles on a Rock Where People Gather|teamLab|Tokyo, Japan|2018" },
            { src: "./image/5.jpg", tags: "m l", text: "Drawing on the Water Surface Created by the Dance of Koi and People|teamLab|Tokyo, Japan|2016" },
            { src: "./image/6.jpg", tags: "a s", text: "Modern Guru and the Path to Artificial Happiness|ENESS|New Taipei City|until 14 January, 2024" },
            { src: "./image/7.jpg", tags: "s l", text: "Oscillations|Miguel Chevalier|Pittsburg, USA|2020" },
            { src: "./image/8.jpg", tags: "m", text: "COMPLEX MESHES 2017|Miguel Chevalier|Jacksonville, USA|2017" },
            { src: "./image/9.jpg", tags: "s l p", text: "Firewall|Aaron Sherwood, Michael Allison|New York, USA|2013" },
            { src: "./image/10.jpg", tags: "s l", text: "Klanglichter|Tobias Kreter, Onat Hekimoglu|Cologne, Germany|2015" },
            { src: "./image/11.jpg", tags: "p l", text: "Pulse|Red Paper Heart|New York, USA|2012" },
            { src: "./image/12.jpg", tags: "p l", text: "Heart bot|Intel, sms audio|New York, USA|2014" },
            { src: "./image/13.jpg", tags: "l m", text: "Visions of Future|++|Sochi, Russia|2018" },
            { src: "./image/14.jpg", tags: "l", text: "VLES|++|Moscow, Russia|2015" },
            { src: "./image/15.jpg", tags: "l", text: "EARTHTIME 1.8|Janet Echelman|London, UK|2018" },
            { src: "./image/16.jpg", tags: "s", text: "SAY_SUPERSTRINGS|Ouchhh|Linz, Austria|2019" },
            { src: "./image/17.jpg", tags: "p s", text: "Pulse Topology|Rafael Lozano-Hemmer|Toronto, Canada|2021" },
            { src: "./image/18.jpg", tags: "m s", text: "Transmediale|Büro Achter April|Berlin, Germany|2011" },
            { src: "./image/19.jpg", tags: "m", text: "Let's Move|Wolff Ollins|USA|2013" },
            { src: "./image/20.jpg", tags: "m n", text: "FIELD|DESIGN I/O|New York, USA|2019" },
            { src: "./image/21.jpg", tags: "m l n", text: "Flutter of Butterflies Beyond Borders|teamLab|Tokyo, Japan|2016" },
            { src: "./image/22.jpg", tags: "l", text: "docomo Palette|TORAFU|Tokyo, Japan|2011" },
            { src: "./image/23.jpg", tags: "p n", text: "Touch your heart|Ysure|2021" },
            { src: "./image/24.jpg", tags: "l s p", text: "Nor Mind|MASSIVart|Huangshan, China" },
            { src: "./image/25.jpg", tags: "m l n", text: "SMF|Hello IO|2020" },
            { src: "./image/26.jpg", tags: "p l", text: "Ilumina|Pablo González Vargas|Nevada, US|2017" },
            { src: "./image/27.jpg", tags: "m", text: "You! The Experience|Thinc|Chicago, USA|2009" },
            { src: "./image/28.jpg", tags: "m a", text: "Augmented Hand Series|Golan Levin|Pennsylvania, USA|2017" },
            { src: "./image/29.jpg", tags: "m", text: "The Treachery of Sanctuary|Chris Milk|San Francisco, USA|2012" },
            { src: "./image/30.jpg", tags: "m", text: "Robotic Shadow|Takram|Tokyo, Japan|2014" },
            { src: "./image/31.jpg", tags: "p l s", text: "Connected Heartbeats|Phan V|New York, USA|2013|Heartbeat, projection, sound" },
            { src: "./image/32.jpg", tags: "m", text: "FIRE & ICE|Cinimod Studio|SOUTHAMPTON, UK|2017|Movement, mc" },
            { src: "./image/33.jpg", tags: "m l", text: "Red Zone|Griffith University|Southport, Australia|2018|Movement, mc, LED" },
            { src: "./image/34.jpg", tags: "s l", text: "Noisy Skeleton|Theoriz|2013|/|Sound, projection" },
            { src: "./image/35.jpg", tags: "s l p", text: "Fabric Play|Wenting Guo|2014|Boston, USA|Sound, projection, fabric, pressure" },
            { src: "./image/36.jpg", tags: "s l", text: "Lenses|HUSH|New York, USA|2016|Sound, light" },
            { src: "./image/37.jpg", tags: "s", text: "Noteput|Jürgen Graef & Jonas Heuer|/|2009|Sound, LED" },
            { src: "./image/38.jpg", tags: "p l", text: "Pulse Park|Rafael Lozano-Hemmer|New York, USA|2008|Heartbeat, light, urban" },
            { src: "./image/39.jpg", tags: "m", text: "DISRUPT THE THREAD|FACTORY FIFTEEN|Florence, Italy|2018|Movement, mc" },
            { src: "./image/40.jpg", tags: "m l", text: "Dotdotdot|Formafantasma|Rome, Italy|2021|Movement, Projection" },
            { src: "./image/41.jpg", tags: "m l ", text: "The Way of the Sea|teamLab|2019|Tokyo, Japan|Mc, projection, nature" },
            { src: "./image/42.jpg", tags: "m l n", text: "Bloom|MAOTIK|/|2017|Sound, projection, mc" },
            { src: "./image/43.jpg", tags: "m n", text: "retailtainment|ADEMORI|Las Arenas, Spain|2018|Movement, nature, screen" },
            { src: "./image/44.jpg", tags: "m", text: "Fitur|Framemov|Castilla la Mancha, Spain|2018|Movement, mc, screen" },
            { src: "./image/45.jpg", tags: "s a l", text: "Wishing Wall|Varvara Guljajeva & Mar Canet|London, UK|2014|Sound, AI, Projection" },
            { src: "./image/46.jpg", tags: "s a", text: "Play the World|Zach Lieberman|London, UK|2014|Music, AI" },
            { src: "./image/47.jpg", tags: "m a", text: "Co(de) Factor|Karsten Schmidt|London, UK|2014|Movement, mc, AI" },
            { src: "./image/48.jpg", tags: "m a", text: "Les Métamorphoses de Mr. Kalia|Béatrice Lartigue and Cyril Diagne|London, UK|2014|Movement, mc, AI" },
            { src: "./image/49.jpg", tags: "m", text: "Boolean Planet|Future Wife|New York, USA|2017|Movement, mc" },
            { src: "./image/50.jpg", tags: "m l", text: "M O M E N T S|MELT|Paris, France|2020|Movement, mc, projection" },
            { src: "./image/51.jpg", tags: "m", text: "Rain Room|Random International|London, UK|2012" },
            { src: "./image/52.jpg", tags: "n l", text: "Submergence|Squidsoup|International|2011" },
            { src: "./image/53.jpg", tags: "l", text: "TeamLab Borderless|teamLab|Tokyo, Japan|2018" },
            { src: "./image/54.jpg", tags: "l", text: "XYZT: Abstract Landscapes|Adrien M & Claire B|International|2011" },
            { src: "./image/55.jpg", tags: "l m", text: "Light is Time|Tsuyoshi Tane|Milan, Italy|2014" },
            { src: "./image/56.jpg", tags: "m l", text: "CLOUD|Caitlind r.c. Brown & Wayne Garrett|International|2012" },
            { src: "./image/57.jpg", tags: "m", text: "The Pool|Jen Lewin|International|2008" },
            { src: "./image/58.jpg", tags: "p l", text: "BIO-DIGITAL|Refik Anadol|Istanbul, Turkey|2014" },
            { src: "./image/59.jpg", tags: "a", text: "Pixel Wave 2015|Marcos Zotes|Amsterdam, Netherlands|2015" },
            { src: "./image/60.jpg", tags: "l", text: "Sensing Streams|Umbrellium|London, UK|2016" },
            { src: "./image/61.jpg", tags: "a", text: "Future World: Where Art Meets Science|teamLab|Singapore|2016" },
            { src: "./image/62.jpg", tags: "m l", text: "Abyss|Nonotak Studio|International|2015" },
            { src: "./image/63.jpg", tags: "m l", text: "AURA|Joanie Lemercier|International|2013" },
            { src: "./image/64.jpg", tags: "m", text: "Prismatica|RAW Design and ATOMIC3|Montreal, Canada|2014" },
            { src: "./image/65.jpg", tags: "m a", text: "Body Paint|Memo Akten|International|2010" },
            { src: "./image/66.jpg", tags: "l", text: "Mirror Mirror|Daniel Rozin|New York, USA|1999" },
            { src: "./image/67.jpg", tags: "l", text: "Light Barrier|Kimchi and Chips|International|2014" },
            { src: "./image/68.jpg", tags: "s l", text: "Murmur Wall|Future Cities Lab|San Francisco, USA|2011" },
            { src: "./image/69.jpg", tags: "l", text: "Body Movies|Rafael Lozano-Hemmer|International|2001" },
            { src: "./image/70.jpg", tags: "m", text: "Floralis Generica|Eduardo Catalano|Buenos Aires, Argentina|2002" },
            { src: "./image/71.jpg", tags: "s l", text: "Pulse Room|Rafael Lozano-Hemmer|Montreal, Canada|2006" },
            { src: "./image/72.jpg", tags: "l a", text: "Light Leaks|Kyle McDonald and Jonas Jongejan|New York, USA|2015" },
            { src: "./image/73.jpg", tags: "s p", text: "Cymatics: Science vs. Music|Nigel Stanford|Location: Online (Music Video)|2014" },
            { src: "./image/74.jpg", tags: "m l", text: "N-Polytope: Behaviors in Light and Sound after Iannis Xenakis|Chris Salter and Sofian Audry|Location: Various international exhibitions|2013" },
            { src: "./image/75.jpg", tags: "l", text: "Reflektor|Romain Tardy (AntiVJ)|Brussel, Belgium|2011" },
            { src: "./image/76.jpg", tags: "m l", text: "Drift|Studio Roosegaarde|Amsterdam, Netherlands|2015" },
            { src: "./image/77.jpg", tags: "a n", text: "Before the rain|Random International|Melbourne, Australia|2015" },
            { src: "./image/78.jpg", tags: "a", text: "Flock|Danny Rose Studio|Paris, France|Year: 2017" },
            { src: "./image/79.jpg", tags: "s", text: "Pendulum Choir|Cod.Act|Vitanje, Slovenia|2011" },
            { src: "./image/80.jpg", tags: "m", text: "Obliteration Room|Yayoi Kusama|Tokyo, Japan|Year: 2002" },
            { src: "./image/81.jpg", tags: "m", text: "Hylozoic Series|Philip Beesley|Toronto, Canada|2007" },
            { src: "./image/82.jpg", tags: "m a", text: "Beyond Infinity|Refik Anadol|Pilevneli Gallery, Istanbul|2020" },
            { src: "./image/83.jpg", tags: "l m", text: "Articulated Head|Jim Campbell|San Jose, USA|Year: 2010" },
            { src: "./image/84.jpg", tags: "l m", text: "Momentum|United Visual Artists (UVA)|London, UK|2014" },
            { src: "./image/85.jpg", tags: "m", text: "3D Zoetrope|Mate Steinforth|New York, USA|2013" },
            { src: "./image/86.jpg", tags: "m l", text: "Immersive Surfaces|Nonotak Studio|Tokyo, Japan|2013" },
            { src: "./image/87.jpg", tags: "n a", text: "Stratus|Quayola|Rome, Italy|2013" },
            { src: "./image/88.jpg", tags: "l", text: "404.zero - Black Hole Horizon|404.zero|International|2018" },
            { src: "./image/89.jpg", tags: "a", text: "Bloom: Open Space|Brian Eno and Peter Chilvers|London, UK|2018" },
            { src: "./image/90.jpg", tags: "m l", text: "NOVA|Designer: United Visual Artists (UVA)|International|2011" },
            { src: "./image/91.jpg", tags: "s p", text: "Iris|SOFTlab|Prague, Czech Republic|2014" },
            { src: "./image/92.jpg", tags: "a m", text: "FLUIDIC - Sculpture in Motion|WHITEvoid|Berlin, Germany|2011" },
            { src: "./image/93.jpg", tags: "a", text: "Abyssal|Memo Akten|International|2014" },
            { src: "./image/94.jpg", tags: "a", text: "Future Ruins|Refik Anadol|Chicago, USA|2019" },
            { src: "./image/95.jpg", tags: "a m", text: "Nubis|Miguel Chevalier|Paris, France|2019" },
            { src: "./image/96.jpg", tags: "m l", text: "Living Digital Space and Future Parks|teamLab|Tokyo, Japan|2016" },
            { src: "./image/97.jpg", tags: "m a", text: "FUJI|Joanie Lemercier|International|2016" },
            { src: "./image/98.jpg", tags: "l a", text: "Pixel|Marcos Zotes|Austurvöllur, Reykjavik|Year: 2013" },
            { src: "./image/99.jpg", tags: "l m", text: "Ethereal|Nonotak Studio|Paris, France|Year: 2017" },
            { src: "./image/100.jpg", tags: "m l a", text: "Metamorphy|Thijs Biersteker|London, UK|2015" }
    ]
        

    // Create image containers and add them to the grid
    imageData.forEach(data => {
        const imageContainer = createImageContainer(data.src, data.tags, data.text);
        gridContainer.appendChild(imageContainer);
    });

    const gridItems = Array.from(gridContainer.children);
    gridItems.forEach((item, index) => {
        item.classList.add(`item-${index + 1}`);
    });
    
    // Add event listeners
    tags.forEach(tag => {
        tag.addEventListener('click', function () {
            filterByTag(tag.dataset.tag);
        });
    });

    clearButton.addEventListener('click', function () {
        clearFilter();
    });

    function filterByTag(tag) {
        const imageContainers = document.querySelectorAll('.image-container');
        imageContainers.forEach(container => {
            const image = container.querySelector('img');
            const tags = image.dataset.tags.split(' ');

            if (tags.includes(tag)) {
                growImage(image);
            } else {
                shrinkImage(image);
            }
        });
    }

    function clearFilter() {
        const imageContainers = document.querySelectorAll('.image-container');
        imageContainers.forEach(container => shrinkImage(container.querySelector('img')));
    }

    function growImage(image) {
        image.style.width = '900px';
    }

    function shrinkImage(image) {
        image.style.width = '100px';
    }

    function createImageContainer(src, tags, text) {
        const container = document.createElement('div');
        container.classList.add('image-container');

        const image = document.createElement('img');
        image.src = src;
        image.dataset.tags = tags;

        const textOverlay = document.createElement('div');
        textOverlay.classList.add('text-overlay');
        textOverlay.textContent = text;

        container.appendChild(image);
        container.appendChild(textOverlay);

        return container;
    }
});
