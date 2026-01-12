   let pricePerItem = 499;
    let shipping = 50;
    let qty = 1;

    function updatePrices() {
        let itemTotal = qty * pricePerItem;

        document.getElementById("qty").innerText = qty;
        document.getElementById("itemPrice").innerText = itemTotal;
        document.getElementById("subtotal").innerText = itemTotal;
        document.getElementById("total").innerText = itemTotal + shipping;
    }

    function increaseQty() {
        if (qty < 10) {
            qty++;
            updatePrices();
        }
    }

    function decreaseQty() {
        if (qty > 1) {
            qty--;
            updatePrices();
        }
    }

    function removeItem() {
        qty = 0;

        document.getElementById("qty").innerText = 0;
        document.getElementById("itemPrice").innerText = 0;
        document.getElementById("subtotal").innerText = 0;
        document.getElementById("total").innerText = 0;
    }


    function openShopPage() {
    window.location.href = "shop.html";
}