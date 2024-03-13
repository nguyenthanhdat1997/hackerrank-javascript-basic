function processOrderList(orderList, orderId, state) {
    // Write your code here
    if (state === 'Processing') {
        for (let i = 0; i < orderList.length; i++) {
            if (orderList[i].id === orderId) {
                orderList[i].state = 'Processing';
                break;
            }
        }
    } else if (state === 'Delivered') {
        for (let i = 0; i < orderList.length; i++) {
            if (orderList[i].id === orderId) {
                orderList.splice(i, 1);
                break;
            }
        }
    }
    return orderList;
}