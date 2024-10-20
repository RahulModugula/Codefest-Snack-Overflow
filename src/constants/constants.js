import ExploreIcon from "@material-ui/icons/Explore";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import MoodIcon from "@material-ui/icons/Mood";
import ChatIcon from "@material-ui/icons/Chat";

export const steps = [
  {
    label: "Trip",
    icon: <ExploreIcon />,
    description: "What kind of a trip is this?",
  },
  {
    label: "Company",
    icon: <ExploreIcon />,
    description: "Who are you traveling with?",
  },
  {
    label: "Activities",
    icon: <ExploreIcon />,
    description: "What type of activities are you interested in?",
  },
  {
    label: "Climate",
    icon: <ExploreIcon />,
    description: "What type of climate do you prefer?",
  },
  {
    label: "Cuisine",
    icon: <ExploreIcon />,
    description: "What type of cuisines do you like?",
  },
  {
    label: "Days",
    icon: <DateRangeIcon />,
    description: "How many days will you stay?",
  },
  {
    label: "Budget",
    icon: <AttachMoneyIcon />,
    description: "What is your budget level?",
  },
  {
    label: "Features",
    icon: <MoodIcon />,
    description: "Enter the features you like:",
    options: [
      {
        label: "Chill 🏖️",
        description: "We will loosen the trip schedule as much as possible.",
      },
      {
        label: "Nature 🏞️",
        description: "We will embrace attractions in natural settings.",
      },
      {
        label: "Urban 🏙️",
        description: "We will prioritize attractions in downtown areas.",
      },
    ],
  },
  {
    label: "AI Recommendation",
    icon: <ChatIcon />,
    description: "Loading AI Recommendation...",
  },
];
