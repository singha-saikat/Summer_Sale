let total = 0;
function findElementById(id){
    const theElement = document.getElementById(id);
    return theElement;
}
function addProductName(productId,cardId){
    const getProductName = findElementById(productId);
    const productName = getProductName.innerText;
    const getCart = findElementById(cardId);
    const count = getCart.childElementCount;
    const p = document.createElement('p');
    p.classList.add ('font-medium','px-8','bg-base-100','shadow-xl');
    p.innerHTML = `${count+1}.${productName }`
    getCart.appendChild(p);


}
function applyProductActions(priceElementId, totalPriceElementId, purchaseBtnId, goHomeBtnId) {
    const productPrice = document.getElementById(priceElementId);
    const price = parseFloat(productPrice.innerText);
    total = parseFloat(total) + parseFloat(price);
    const verdictPrice = total.toFixed(2);
    const getTotalPrice = document.getElementById(totalPriceElementId);
    getTotalPrice.innerText = `${verdictPrice} Tk`;

    const getPurchaseBtn = document.getElementById(purchaseBtnId);
    if (verdictPrice > 0) {
        getPurchaseBtn.disabled = false;
        getPurchaseBtn.addEventListener('click', function() {
            const getId = document.getElementById('purchase');
            getId.showModal();
        });
    } else {
        getPurchaseBtn.disabled = true;
    }

    const getGoHome = document.getElementById(goHomeBtnId);
    getGoHome.addEventListener('click', function() {
        window.location.href = "index.html";
    });
}
function applyBtnThings(coupon) {
    if (total >= 200) {
        coupon.disabled = false;

        coupon.addEventListener('click', function() {
            console.log('worked');
            const couponCode = document.getElementById('couponCode');
            console.log(couponCode);
            const getCoupon = couponCode.value;
            console.log(getCoupon);
            if (getCoupon === 'SELL200') {
                const discount = (0.2 * total).toFixed(2);
                console.log(discount);
                const afterDiscountTotal = (total - discount).toFixed(2);
                console.log(afterDiscountTotal);
                
                const discountText = document.getElementById('discountInTaka');
                discountText.innerText = `${discount} Tk`;
                const payable = document.getElementById('grandTotal');
                payable.innerText = afterDiscountTotal;
            }
        });
    } else {
        coupon.disabled = true;
    }
}
function updateProductTotal(productPriceId, totalPriceId, purchaseBtnId, purchaseDialogId, goHomeBtnId) {
    const productPrice = parseFloat(document.getElementById(productPriceId).innerText);
    total += productPrice;
    const verdictPrice = total.toFixed(2);

    const getTotalPrice = document.getElementById(totalPriceId);
    getTotalPrice.innerText = `${verdictPrice} Tk`;

    const getPurchaseBtn = document.getElementById(purchaseBtnId);
    if (verdictPrice > 0) {
        getPurchaseBtn.disabled = false;
        getPurchaseBtn.addEventListener('click', function() {
            const purchaseDialog = document.getElementById(purchaseDialogId);
            purchaseDialog.showModal();
        });
    } else {
        getPurchaseBtn.disabled = true;
    }

    const getGoHome = document.getElementById(goHomeBtnId);
    getGoHome.addEventListener('click', function() {
        window.location.href = "index.html";
    });
}
