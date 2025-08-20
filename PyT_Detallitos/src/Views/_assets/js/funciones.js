function validateDecimals(input) {
    const value = input.value;
    if (!/^\d*(\.\d{0,2})?$/.test(value)) {
        input.value = value.slice(0, -1); // Remove the last invalid character
    }
}