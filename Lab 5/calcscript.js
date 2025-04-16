document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('tipCalculator');
  const billTotal = document.getElementById('billTotal');
  const tipPercent = document.getElementById('tipPercent');
  const tipValue = document.getElementById('tipValue');
  const tipAmount = document.getElementById('tipAmount');
  const totalWithTax = document.getElementById('totalWithTax');
  const totalWithTipTax = document.getElementById('totalWithTipTax');
  const currencySelect = document.getElementById('currency');
  const convertedTip = document.getElementById('convertedTip');
  const convertedTotal = document.getElementById('convertedTotal');
  const billError = document.getElementById('billError');

  // Exchange rates
  const exchangeRates = {
      USD: 1,
      EUR: 0.95,
      INR: 85
  };

  // Event Listeners
  form.addEventListener('input', calculateTotals);
  currencySelect.addEventListener('change', calculateTotals);

  function calculateTotals() {
      // Clear previous errors
      billError.textContent = '';
      billTotal.classList.remove('shake');

      // Get values
      const billValue = parseFloat(billTotal.value);
      const tipPercentage = parseFloat(tipPercent.value);

      // Validation
      if (isNaN(billValue) || billValue < 0) {
          billError.textContent = 'Please enter a valid positive number';
          billTotal.classList.add('shake');
          clearOutputs();
          return;
      }

      // Update tip percentage display
      tipValue.textContent = `${tipPercentage}%`;

      // Calculate tax (11% if bill > 0)
      const taxRate = billValue > 0 ? 0.11 : 0;
      const taxAmount = billValue * taxRate;
      
      // Calculate tip
      const tip = billValue * (tipPercentage / 100);
      
      // Calculate totals
      const totalWithTaxVal = billValue + taxAmount;
      const totalWithTipTaxVal = totalWithTaxVal + tip;

      // Update outputs
      totalWithTax.value = totalWithTaxVal.toFixed(2);
      tipAmount.value = tip.toFixed(2);
      totalWithTipTax.value = totalWithTipTaxVal.toFixed(2);

      // Currency conversion
      const currency = currencySelect.value;
      const rate = exchangeRates[currency];
      
      convertedTip.value = `${(tip * rate).toFixed(2)} ${currency}`;
      convertedTotal.value = `${(totalWithTipTaxVal * rate).toFixed(2)} ${currency}`;
  }

  function clearOutputs() {
      totalWithTax.value = '';
      tipAmount.value = '';
      totalWithTipTax.value = '';
      convertedTip.value = '';
      convertedTotal.value = '';
  }
});
