function useState(initialValue: number): [() => number, (value: number) => void, number] {
    let currentValue = initialValue;
    const setValue = (value: number) => {
        currentValue = value;
    };
    const getValue = () => currentValue;
    return [getValue, setValue, initialValue];
}

const [getValue, setValue, initialValue] = useState(10);
const v = getValue();
setValue(20);