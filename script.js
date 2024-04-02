function toCase(text) {
    let lowerCase = '';
    let upperCase = '';

    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            lowerCase += text[i].toLowerCase();
            upperCase += text[i];
        } else if (text[i] >= 'a' && text[i] <= 'z') {
            lowerCase += text[i];
            upperCase += text[i].toUpperCase();
        } else if (text[i] === ' ') {
            lowerCase += ' -';
            upperCase += ' -';
        }
    }

    return lowerCase + upperCase;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
