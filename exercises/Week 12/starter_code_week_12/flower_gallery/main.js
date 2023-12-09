console.log('this works');

const flowers = [
    {
        name: "Tulip",
        color: "yellow",
        image:
        "https://cdn.britannica.com/37/227037-050-CA792866/Broken-tulip-flower.jpg"
    },
    {
        name: "Daffodil",
        color: "yellow",
        image: "https://h2.commercev3.net/cdn.brecks.com/images/800/67248A.jpg"
    },
    {
        name: "Sunflower",
        color: "yellow",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sunflower_sky_backdrop.jpg/800px-Sunflower_sky_backdrop.jpg"
    },
    {
        name: "Bluebell",
        color: "blue",
        image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a8/Hyacinthoides_non-scripta_%28Common_Bluebell%29.jpg"
    },
    {
        name: "Rose",
        color: "red",
        image: "https://www.jacksonandperkins.com/images/xxl/v1780.jpg"
    }
];

const ul = document.querySelector("ul");

const renderNamesToPage = (items) => {
    for(let i = 0; i < items.length; i++){
        console.log(items[i]);
        let list_item = document.createElement("li");
        list_item.classList.add(flowers[i].color, `item--${i + 1}`)

        let title = document.createElement("h3");
        title.textContent = flowers[i].name;

        let color = document.createElement("p");
        color.textContent = flowers[i].color;

        let image = document.createElement("img");
        image.setAttribute("src", flowers[i].image);

        ul.appendChild(list_item)
        list_item.appendChild(title)
        list_item.appendChild(color)
        list_item.appendChild(image)
    }
}
renderNamesToPage(flowers);