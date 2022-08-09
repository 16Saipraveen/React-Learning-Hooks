export const COLUMNS = [
    {
        Header: "Head",
        columns: [
            {
                id: "checkbox",
                accessor: "",
                Cell: ({ original }) => {
                    return (
                        <input
                            type="checkbox"
                            className="checkbox"
                            // checked={this.state.selected[original.firstName] === true}
                            // onChange={() => this.toggleRow(original.firstName)}
                        />
                    );
                },
                Header: x => {
                    return (
                        <input
                            type="checkbox"
                            className="checkbox"
                            // checked={this.state.selectAll === 1}
                            // ref={input => {
                            //     if (input) {
                            //         input.indeterminate = this.state.selectAll === 2;
                            //     }
                            // }}
                            // onChange={() => this.toggleSelectAll()}
                        />
                    );
                },
                sortable: false,
                width: 45
            }
        ]
    },
    {
        Header: 'ID',
        accessor: 'id'
    },
    {
        Header: 'Title',
        accessor: 'Title'
    },
    {
        Header: 'Description',
        accessor: 'Description'
    },
    {
        Header: 'Link',
        accessor: 'email'
    }
]