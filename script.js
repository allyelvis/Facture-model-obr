document.getElementById('invoiceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    generateInvoice();
});

function addItem() {
    const itemsContainer = document.getElementById('items');
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `
        <input type="text" class="itemDescription" placeholder="Description" required>
        <input type="number" class="itemQuantity" placeholder="Quantity" required>
        <input type="number" class="itemPrice" placeholder="Price" required>
        <button type="button" onclick="removeItem(this)">Remove</button>
    `;
    itemsContainer.appendChild(itemDiv);
}

function removeItem(button) {
    button.parentElement.remove();
}

function generateInvoice() {
    const sellerName = document.getElementById('sellerName').value;
    const sellerAddress = document.getElementById('sellerAddress').value;
    const companyNIF = document.getElementById('companyNIF').value;
    const legalForm = document.getElementById('legalForm').value;
    const tradeRegister = document.getElementById('tradeRegister').value;
    const sellerContact = document.getElementById('sellerContact').value;
    const vatSubjected = document.getElementById('vatSubjected').value;
    const buyerName = document.getElementById('buyerName').value;
    const buyerAddress = document.getElementById('buyerAddress').value;
    const invoiceDate = document.getElementById('invoiceDate').value;

    const items = [];
    document.querySelectorAll('#items .item').forEach(itemDiv => {
        const description = itemDiv.querySelector('.itemDescription').value;
        const quantity = itemDiv.querySelector('.itemQuantity').value;
        const price = itemDiv.querySelector('.itemPrice').value;
        items.push({ description, quantity, price });
    });

    let totalAmount = 0;
    let invoiceHtml = `
        <h3>Invoice</h3>
        <p><strong>Seller Name:</strong> ${sellerName}</p>
        <p><strong>Seller Address:</strong> ${sellerAddress}</p>
        <p><strong>Company NIF:</strong> ${companyNIF}</p>
        <p><strong>Legal Form:</strong> ${legalForm}</p>
        <p><strong>Trade Register:</strong> ${tradeRegister}</p>
        <p><strong>Contact:</strong> ${sellerContact}</p>
        <p><strong>VAT Subjected:</strong> ${vatSubjected}</p>
        <p><strong>Buyer Name:</strong> ${buyerName}</p>
        <p><strong>Buyer Address:</strong> ${buyerAddress}</p>
        <p><strong>Invoice Date:</strong> ${invoiceDate}</p>
        <table border="1" cellpadding="10" cellspacing="0">
            <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
    `;

    items.forEach(item => {
        const itemTotal = item.quantity * item.price;
        totalAmount += itemTotal;
        invoiceHtml += `
            <tr>
                <td>${item.description}</td>
                <td>${item.quantity}</td>
                <td>${item.price}</td>
                <td>${itemTotal}</td>
            </tr>
        `;
    });

    invoiceHtml += `
            <tr>
                <td colspan="3"><strong>Total Amount</strong></td>
                <td><strong>${totalAmount}</strong></td>
            </tr>
        </table>
    `;

    document.getElementById('invoicePreview').innerHTML = invoiceHtml;

    // Save the invoice
    saveInvoice({
        sellerName,
        sellerAddress,
        companyNIF,
        legalForm,
        tradeRegister,
        sellerContact,
        vatSubjected,
        buyerName,
        buyerAddress,
        invoiceDate,
        items,
        totalAmount
    });
}

function saveInvoice(invoice) {
    const invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    invoices.push(invoice);
    localStorage.setItem('invoices', JSON.stringify(invoices));
}

function listInvoices() {
    const invoices = JSON.parse(localStorage.getItem('invoices') || '[]');
    console.log('Invoices:', invoices);
    // Display invoices in a suitable format (e.g., table or list)
}

function listProducts() {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    console.log('Products:', products);
    // Display products in a suitable format (e.g., table or list)
}

function listCustomers() {
    const customers = JSON.parse(localStorage.getItem('customers') || '[]');
    console.log('Customers:', customers);
    // Display customers in a suitable format (e.g., table or list)
}

function getPayment() {
    // Handle payment process
    console.log('Getting payment...');
}

function generateBill() {
    // Generate bill from the invoice
    console.log('Generating bill...');
}

function printOrSaveBill() {
    // Print or save the bill
    console.log('Printing or saving bill...');
}

function listBills() {
    const bills = JSON.parse(localStorage.getItem('bills') || '[]');
    console.log('Bills:', bills);
    // Display bills in a suitable format (e.g., table or list)
}

function editOrder() {
    // Edit an existing order
    console.log('Editing order...');
}
