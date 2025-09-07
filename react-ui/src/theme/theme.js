import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { font } from "./foundations/fonts";
import { breakpoints } from "./foundations/breakpoints";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { linkStyles } from "./components/link";
import { drawerStyles } from "./components/drawer";
import { CardComponent } from "./additions/card/Card";
import { CardBodyComponent } from "./additions/card/CardBody";
import { CardHeaderComponent } from "./additions/card/CardHeader";
import { MainPanelComponent } from "./additions/layout/MainPanel";
import { PanelContentComponent } from "./additions/layout/PanelContent";
import { PanelContainerComponent } from "./additions/layout/PanelContainer";
// mode import removed: Chakra UI 2.x supports color mode in style functions via the theme argument.
// Merge everything into a single theme object for Chakra UI 2.x best practices
const overrides = {
  breakpoints, // Ensure breakpoints are in the theme root
  ...globalStyles,
  ...font,
  ...buttonStyles,
  ...badgeStyles,
  ...linkStyles,
  ...drawerStyles,
  ...CardComponent,
  ...CardBodyComponent,
  ...CardHeaderComponent,
  ...MainPanelComponent,
  ...PanelContentComponent,
  ...PanelContainerComponent,
};

export default extendTheme(overrides);

