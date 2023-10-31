import {
	component$,
	createContextId,
	Slot,
	useContextProvider,
	useStore,
	useVisibleTask$
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import { Footer } from "~/components/Footer/Footer";
import { Header } from "~/components/Header/Header";
import { LoadingBar } from "~/components/LoadingBar/LoadingBar";
import { config } from "../../road-plan.config";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

type Store = {
  theme: "light" | "dark" | "system";
};

export const StoreContext = createContextId<Store>("Store");

export default component$(() => {
	const store = useStore<Store>({ theme: "light" })
  useContextProvider(StoreContext, store);
	useVisibleTask$(() => {
    const theme = localStorage.getItem("theme") as Store['theme'];
    store.theme = theme;
  });
  return (
    <div class="app-layout">
      {config.loadingBar.enabled && <LoadingBar />}
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
