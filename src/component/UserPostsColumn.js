
const UserPostsColumn = [
    {
      columns: [
        {
          Header: "ID",
          accessor: "id",
          sortMethod: (a, b) => {
            if (a.length === b.length) {
              return a > b ? 1 : -1;
            }
            return a.length > b.length ? 1 : -1;
          }
        },
        {
          Header: "UserID",
          accessor: "userId",
          sortMethod: (a, b) => {
              if (a.length === b.length) {
                return a > b ? 1 : -1;
              }
              return a.length > b.length ? 1 : -1;
            }
        },
        {
          Header: "Title",
          accessor: "title",
          sortMethod: (a, b) => {
            if (a === b) {
              return 0;
            }
            const aReverse = a.split("").reverse().join("");
            const bReverse = b.split("").reverse().join("");
            return aReverse > bReverse ? 1 : -1;
          }
        },
        {
          Header: "Body",
          accessor: "body",
          sortMethod: (a, b) => {
            if (a === b) {
              return 0;
            }
            const aReverse = a.split("").reverse().join("");
            const bReverse = b.split("").reverse().join("");
            return aReverse > bReverse ? 1 : -1;
          }
        }
      ]
    }
    
  ]

  export default UserPostsColumn;