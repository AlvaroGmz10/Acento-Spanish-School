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
    title: "Home Classes",
    description: "Personalized 1-on-1 Spanish immersion.",
    plans: [
      {
        id: "private-starter",
        type: "Private Classes",
        name: "Starter",
        frequency: "5 Hours",
        classes: "-",
        price: "$65 USD",
      },
      {
        id: "private-consistent",
        type: "Private Classes",
        name: "Consistent",
        frequency: "10 Hours",
        classes: "-",
        price: "$110 USD",
        featured: true,
        badge: "MOST POPULAR",
      },

      {
        id: "private-immersion",
        type: "Private Classes",
        name: "Immersion",
        frequency: "15 Hours",
        classes: "-",
        price: "$155 USD",
      },
    ],
  },

  duo: {
    title: "Co-working Classes",
    description: "Learn Spanish together with a partner.",
    plans: [
      {
        id: "duo-starter",
        type: "Duo Classes",
        name: "Starter",
        frequency: "5 Hours",
        classes: "-",
        price: "$80 USD",
      },
      {
        id: "duo-consistent",
        type: "Duo Classes",
        name: "Consistent",
        frequency: "10 Hours",
        classes: "-",
        price: "$145 USD",
        featured: true,
        badge: "BEST VALUE",
      },
      {
        id: "duo-immersion",
        type: "Duo Classes",
        name: "Immersion",
        frequency: "15 Hours",
        classes: "-",
        price: "$190 USD",
      },
    ],
  },

  group: {
    title: "Traditional Classes",
    description: "Dynamic collaborative learning experience.",
    plans: [
      {
        id: "group-starter",
        type: "Group Classes",
        name: "Starter",
        frequency: "5 Hours",
        classes: "-",
        price: "$90 USD",
      },
      {
        id: "group-consistent",
        type: "Group Classes",
        name: "Consistent",
        frequency: "10 Hours",
        classes: "-",
        price: "$165 USD",
      },
      {
        id: "group-intensive",
        type: "Group Classes",
        name: "Intensive",
        frequency: "15 Hours",
        classes: "-",
        price: "$245",
        featured: true,
        badge: "FAST PROGRESS",
      },
    ],
  },
};
