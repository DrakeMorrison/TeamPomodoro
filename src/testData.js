const initialData = {
  users: [
    {
      id: 0,
      firebaseId: 'a;lsdkfjasldfj',
      name: 'Michael',
    },
    {
      id: 1,
      firebaseId: 'a;lsdkjf;aljdf',
      name: 'Maken',
    },
    {
      id: 2,
      firebaseId: 'a;lsdkjf;aljdfalsjd',
      name: 'Anna',
    },
    {
      id: 3,
      firebaseId: 'a;lsdkjf;aalsdkhjljdf',
      name: 'Drake',
    },
  ],
  usersToProjects: [
    {
      id: 0,
      userId: 0,
      projectId: 0,
    },
    {
      id: 1,
      userId: 1,
      projectId: 1,
    },
    {
      id: 2,
      userId: 2,
      projectId: 2,
    },
    {
      id: 3,
      userId: 3,
      projectId: 3,
    },
  ],
  projects: [
    {
      id: 0,
      name: 'capstone project',
      isArchived: false,
      description: 'this is a good project',
    },
    {
      id: 1,
      name: 'friend-savior',
      isArchived: false,
      description: 'front-end capstone project',
    },
    {
      id: 2,
      name: 'Bangazon',
      isArchived: true,
      description: 'Bangazon project during NSS',
    },
    {
      id: 3,
      name: 'Pomodoro Projects',
      isArchived: false,
      description: 'that is this project!',
    },
  ],
  tasks: [
    {
      id: 0,
      name: 'finish initialData',
      estimatedPomodori: 3,
      actualPomodori: 4,
      internalInterruptions: 2,
      externalInterruptions: 4,
      userId: 0,
      isArchived: false,
      projectId: 0,
      recordId: 0,
    },
    {
      id: 1,
      name: 'start new projects!',
      estimatedPomodori: 3,
      actualPomodori: 4,
      internalInterruptions: 2,
      externalInterruptions: 4,
      userId: 1,
      isArchived: false,
      projectId: 1,
      recordId: 1,
    },
    {
      id: 2,
      name: 'finish old projects',
      estimatedPomodori: 3,
      actualPomodori: 4,
      internalInterruptions: 2,
      externalInterruptions: 4,
      userId: 2,
      isArchived: false,
      projectId: 2,
      recordId: 2,
    },
    {
      id: 3,
      name: 'learn new stuff',
      estimatedPomodori: 3,
      actualPomodori: 4,
      internalInterruptions: 2,
      externalInterruptions: 4,
      userId: 'active',
      isArchived: false,
      projectId: 3,
      recordId: 3,
    },
  ],
  records: [
    {
      id: 0,
      startTime: '2019-02-03',
      endTime: '',
      projectId: 0,
    },
    {
      id: 1,
      startTime: '2019-02-03',
      endTime: '',
      projectId: 1,
    },
    {
      id: 2,
      startTime: '2019-02-03',
      endTime: '',
      projectId: 2,
    },
    {
      id: 3,
      startTime: '2019-02-03',
      endTime: '',
      projectId: 3,
    },
  ]
};

export default initialData;
