
Array.prototype.GetIndex = (key, value): number => {
    for (let i = 0; i < this.length; i++)
        if (this[i][key] == value)
            return i;
    return undefined;
}
