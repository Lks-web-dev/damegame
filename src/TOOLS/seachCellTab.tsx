export const searchCellTab = (tabCell: number[][], index: number) => {
    let tab: number[] = [];
    for (let i = 0; i < tabCell.length; i++) {
        if (tabCell[i].includes(index)) {
            for (let J = 0; J < tabCell[i].length; J++) {
                tab.push(tabCell[i][J]);
            }
        }
    }
    return tab;
}