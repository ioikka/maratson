/**
 * Gets the desired element on the client page and clicks on it
 */
function goToActivityTab() {
    var activityTab = document.getElementsByClassName("nav-pbi-refresh")[0];
    //
    console.log("clicked ");
    console.log(activityTab);

    for (const a of document.querySelectorAll("a")) {
        if (a.textContent.includes("Refresh")) {
            console.log(a.textContent);
            a.click();
        }
    }
    setTimeout(goToActivityTab, 3000);
}

goToActivityTab();
