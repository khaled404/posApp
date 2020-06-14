const initialState = {
  navgationButtons: [
    {id: '1', title: 'الرئسيه', component: 'CategoryTab'},
    {id: '3', title: 'الطولات', component: 'TablesTab'},
    {id: '6', title: 'المطبخ', route: 'Kitchen'},
    {id: '2', title: 'طلب جديد', component: 'CategoryTab'},
    {id: '4', title: 'طلبات منتهبيه', component: 'Settings'},
    {id: '5', title: 'طلبات معلقه', component: 'Settings'},
    {id: '7', title: 'الإعدادات', route: 'Settings'},
    {id: '8', title: 'الفواتير', route: 'Bills'},
  ],
  categoryButtons: [
    {
      id: '1',
      title: 'جميع الاصناف',
      icon: 'home',
      active: true,
      route: 'homeTab',
    },
    {
      id: '2',
      title: 'الاكثر طلب',
      icon: 'home',
      active: false,
      route: 'homeTab',
    },
    {
      id: '3',
      title: 'وجبات خاصه',
      icon: 'home',
      active: false,
      route: 'homeTab',
    },
    {
      id: '4',
      title: 'مشروبات',
      icon: 'home',
      active: false,
      route: 'homeTab',
    },
    {
      id: '5',
      title: 'اضفات',
      icon: 'home',
      active: false,
      route: 'homeTab',
    },
    {
      id: '6',
      title: 'تحليه',
      icon: 'home',
      active: false,
      route: 'homeTab',
    },
  ],
  tables: [
    {tableNumber: '1', done: false, underway: false},
    {tableNumber: '2', done: false, underway: false},
    {tableNumber: '3', done: false, underway: false},
    {tableNumber: '4', done: false, underway: false},
    {tableNumber: '5', done: false, underway: false},
    {tableNumber: '6', done: false, underway: false},
    {tableNumber: '7', done: false, underway: false},
    {tableNumber: '8', done: false, underway: false},
    {tableNumber: '9', done: false, underway: false},
    {tableNumber: '10', done: false, underway: false},
    {tableNumber: '11', done: false, underway: false},
    {tableNumber: '12', done: false, underway: false},
    {tableNumber: '13', done: false, underway: false},
    {tableNumber: '14', done: false, underway: false},
    {tableNumber: '15', done: false, underway: false},
    {tableNumber: '16', done: false, underway: false},
    {tableNumber: '17', done: false, underway: false},
    {tableNumber: '18', done: false, underway: false},
    {tableNumber: '19', done: false, underway: false},
    {tableNumber: '20', done: false, underway: false},
  ],
  KitchenData: [
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'ready',
        buttonTitle: 'تقديم الطلب',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'سفري',
      orderState: {
        title: 'جاهز',
        action: 'delivery',
        buttonTitle: 'تعين سائق',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
    {
      id: Math.floor(Math.random() * 6000),
      customerName: 'طاوله رقم',
      type: 'بالمطعم',
      orderState: {
        title: 'جاهز',
        action: 'done',
        buttonTitle: 'جاري التقديم',
      },
    },
  ],
};
export default (state = initialState, action) => {
  switch (action.type) {
  }
  return state;
};
