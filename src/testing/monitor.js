import VintedMonitor from "vinted-monitor";

// Create the Monitor
//const Monitor = new VintedMonitor();
// OR
const Monitor = new VintedMonitor(5 * 60 * 1000);
// Will take items that were released less than 5 minutes ago
// Default value is 1 hour

// Now, watch for 1 or more Vinted URL
Monitor.watch("https://www.vinted.fr/vetements?search_text=casquette&brand_id[]=362&order=newest_first&color_id[]=12");

// Finally, create a function that will be executed
// when a new item is detected
Monitor.onItemFound(item => {
    console.log("I detect a new Item !");
    console.log("I found this item using this url", item.info.searchUrl);
    console.log("This item has been posted by", item.user.login);
    console.log("The item name is", item.info.title);
    console.log("This item costs", item.info.price, "€");
    console.log("This item was posted on", item.info.date.toString());
})

// You can stop watching a Vinted URL
Monitor.unWatch("https://www.vinted.fr/vetements?search_text=casquette&brand_id[]=362&order=newest_first&color_id[]=12");