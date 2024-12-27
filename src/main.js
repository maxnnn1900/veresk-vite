import ko from 'knockout';

const data = [
    { a: 12, b: 45 },
    { a: 78, b: 33 },
    { a: 56, b: 89 },
    { a: 23, b: 67 },
    { a: 90, b: 11 },
    { a: 34, b: 54 },
    { a: 80, b: 99 },
    { a: 22, b: 18 },
    { a: 47, b: 73 },
    { a: 65, b: 29 }
];

const viewModel = {
    rows: ko.observableArray(
        data.map(({ a, b }) => {
            const observableA = ko.observable(a);
            const observableB = ko.observable(b);
            return {
                a: observableA,
                b: observableB,
                c: ko.pureComputed(() => parseInt(observableA()) + parseInt(observableB()))
            };
        })
    )
};

ko.applyBindings(viewModel);
