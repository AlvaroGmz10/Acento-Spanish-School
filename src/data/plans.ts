export interface Plan {
  id: string;
  type: string;
  name: string;
  frequency: string;
  classes: string;
  price: string;
  featured?: boolean;
  badge?: string;
}

export const plans = {
  private: {
    title: "Private Classes",
    description: "Personalized 1-on-1 Spanish immersion.",
    plans: [
      {
        id: "private-starter",
        type: "Private Classes",
        name: "Starter",
        frequency: "1 class / week",
        classes: "4 classes monthly",
        price: "$120",
      },
      {
        id: "private-consistent",
        type: "Private Classes",
        name: "Consistent",
        frequency: "2 classes / week",
        classes: "8 classes monthly",
        price: "$210",
        featured: true,
        badge: "MOST POPULAR",
      },
      {
        id: "private-intensive",
        type: "Private Classes",
        name: "Intensive",
        frequency: "3 classes / week",
        classes: "12 classes monthly",
        price: "$290",
      },
      {
        id: "private-immersion",
        type: "Private Classes",
        name: "Immersion",
        frequency: "5 classes / week",
        classes: "20 classes monthly",
        price: "$450",
      },
    ],
  },

  duo: {
    title: "Duo Classes",
    description: "Learn Spanish together with a partner.",
    plans: [
      {
        id: "duo-starter",
        type: "Duo Classes",
        name: "Starter",
        frequency: "1 class / week",
        classes: "4 classes monthly",
        price: "$90",
      },
      {
        id: "duo-consistent",
        type: "Duo Classes",
        name: "Consistent",
        frequency: "2 classes / week",
        classes: "8 classes monthly",
        price: "$170",
        featured: true,
        badge: "BEST VALUE",
      },
      {
        id: "duo-intensive",
        type: "Duo Classes",
        name: "Intensive",
        frequency: "3 classes / week",
        classes: "12 classes monthly",
        price: "$240",
      },
      {
        id: "duo-immersion",
        type: "Duo Classes",
        name: "Immersion",
        frequency: "5 classes / week",
        classes: "20 classes monthly",
        price: "$390",
      },
    ],
  },

  group: {
    title: "Group Classes",
    description: "Dynamic collaborative learning experience.",
    plans: [
      {
        id: "group-starter",
        type: "Group Classes",
        name: "Starter",
        frequency: "1 class / week",
        classes: "4 classes monthly",
        price: "$60",
      },
      {
        id: "group-consistent",
        type: "Group Classes",
        name: "Consistent",
        frequency: "2 classes / week",
        classes: "8 classes monthly",
        price: "$110",
      },
      {
        id: "group-intensive",
        type: "Group Classes",
        name: "Intensive",
        frequency: "3 classes / week",
        classes: "12 classes monthly",
        price: "$150",
        featured: true,
        badge: "FAST PROGRESS",
      },
      {
        id: "group-immersion",
        type: "Group Classes",
        name: "Immersion",
        frequency: "5 classes / week",
        classes: "20 classes monthly",
        price: "$240",
      },
    ],
  },
};
