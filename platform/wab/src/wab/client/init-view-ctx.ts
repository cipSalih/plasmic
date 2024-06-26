import { meta } from "@/wab/classes-metas";
import { observeModel } from "@/wab/observable-model";
import { SiteInfo } from "@/wab/shared/SharedApi";
import * as mobx from "mobx";
import { AppCtx } from "./app-ctx";
import { Clipboard } from "./clipboard";
import { DbCtx } from "./db";
import { loadSiteDbCtx } from "./init-ctx";
import { StudioCtx } from "./studio-ctx/StudioCtx";

(window as any).mobx = mobx;
(window as any).meta = meta;
(window as any).observeModel = observeModel;

export function createStudioCtx({
  dbCtx,
}: {
  dbCtx: DbCtx;
  siteInfo: SiteInfo;
}) {
  const studioCtx =
    ((window as any).studioCtx =
    (window as any).dbg.studioCtx =
      new StudioCtx({
        dbCtx,
        clipboard: new Clipboard(),
      }));

  (window as any).__PLASMIC_EXECUTE_DATA_OP = studioCtx.executePlasmicDataOp;
  (window as any).__PLASMIC_MUTATE_DATA_OP =
    studioCtx.refreshFetchedDataFromPlasmicQuery;
  (window as any).__PLASMIC_GET_ALL_CACHE_KEYS =
    studioCtx.getAllDataOpCacheKeys;
  (window as any).__PLASMIC_STUDIO_PATH = studioCtx.getCurrentPathName;

  return studioCtx;
}

export async function initStudioCtx(
  appCtx: AppCtx,
  siteId: string,
  onRefreshUi
) {
  const dbCtx = await loadSiteDbCtx(appCtx, onRefreshUi, siteId);
  const { siteInfo } = dbCtx;

  return createStudioCtx({
    dbCtx,
    siteInfo,
  });
}
