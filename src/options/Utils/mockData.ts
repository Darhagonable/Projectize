const mockData: Array<Project> = [
  {
    id: 0,
    title: "Project 0",
    windows: [
      {
        id: 1,
        title: "Window 0",
        tabs: [
          {
            id: 2,
            title: "Tab 0",
            windowId: 1
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Project 1",
    windows: [
      {
        id: 4,
        title: "Window 1",
        tabs: [
          {
            id: 5,
            title: "Tab 1",
            windowId: 4
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Project 2",
    windows: [
      {
        id: 7,
        title: "Window 2",
        tabs: [
          {
            id: 8,
            title: "Tab 2",
            windowId: 7
          }
        ]
      }
    ]
  }
];

export default mockData;