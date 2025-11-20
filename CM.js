function calculate() {
    let impressions = Number(document.getElementById("impressions").value);
    let clicks = Number(document.getElementById("clicks").value);
    let cost = Number(document.getElementById("cost").value);
    let conversions = Number(document.getElementById("conversions").value);

    // Formula calculations
    let ctr = ((clicks / impressions) * 100).toFixed(2);
    let cpc = (cost / clicks).toFixed(2);
    let cpm = ((cost / impressions) * 1000).toFixed(2);
    let cr = ((conversions / clicks) * 100).toFixed(2);

    // Updating UI
    document.getElementById("ctr").innerHTML = "CTR: " + ctr + "%";
    document.getElementById("cpc").innerHTML = "CPC: ₹" + cpc;
    document.getElementById("cpm").innerHTML = "CPM: ₹" + cpm;
    document.getElementById("cr").innerHTML = "Conversion Rate: " + cr + "%";

    // Performance rating
    let rate = "";
    if (ctr > 2) rate = "Excellent Performance";
    else if (ctr >= 1) rate = "Good Performance";
    else rate = "Needs Improvement";

    document.getElementById("rating").innerHTML = rate;

    // Chart
    renderChart([impressions, clicks, conversions, cost]);
}

let chartInstance = null;

function renderChart(dataArr) {
    if (chartInstance) {
        chartInstance.destroy();
    }

    let ctx = document.getElementById("campaignChart");

    chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Impressions", "Clicks", "Conversions", "Cost"],
            datasets: [{
                label: "Campaign Data",
                data: dataArr,
                backgroundColor: ["#4CAF50", "#2196F3", "#FF9800", "#9C27B0"]
            }]
        }
    });
}
