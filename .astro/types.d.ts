declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"job": {
"lotus.mdx": {
	id: "lotus.mdx";
  slug: "lotus";
  body: string;
  collection: "job";
  data: InferEntrySchema<"job">
} & { render(): Render[".mdx"] };
"sap.mdx": {
	id: "sap.mdx";
  slug: "sap";
  body: string;
  collection: "job";
  data: InferEntrySchema<"job">
} & { render(): Render[".mdx"] };
"wearegroup.mdx": {
	id: "wearegroup.mdx";
  slug: "wearegroup";
  body: string;
  collection: "job";
  data: InferEntrySchema<"job">
} & { render(): Render[".mdx"] };
};
"project": {
"btpsandbox.mdx": {
	id: "btpsandbox.mdx";
  slug: "btpsandbox";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"electronbuildmanager.mdx": {
	id: "electronbuildmanager.mdx";
  slug: "electronbuildmanager";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"facade.mdx": {
	id: "facade.mdx";
  slug: "facade";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"fpgaml.mdx": {
	id: "fpgaml.mdx";
  slug: "fpgaml";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"fpganetworking.mdx": {
	id: "fpganetworking.mdx";
  slug: "fpganetworking";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"gameoflife.mdx": {
	id: "gameoflife.mdx";
  slug: "gameoflife";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"opsmagna.mdx": {
	id: "opsmagna.mdx";
  slug: "opsmagna";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"strapiplugin.mdx": {
	id: "strapiplugin.mdx";
  slug: "strapiplugin";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"trashapp.mdx": {
	id: "trashapp.mdx";
  slug: "trashapp";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
"twitchchatbot.mdx": {
	id: "twitchchatbot.mdx";
  slug: "twitchchatbot";
  body: string;
  collection: "project";
  data: InferEntrySchema<"project">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		"socials": {
"github": {
	id: "github";
  collection: "socials";
  data: InferEntrySchema<"socials">
};
"linkedin": {
	id: "linkedin";
  collection: "socials";
  data: InferEntrySchema<"socials">
};
"xing": {
	id: "xing";
  collection: "socials";
  data: InferEntrySchema<"socials">
};
};
"tech": {
"asana": {
	id: "asana";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"astro": {
	id: "astro";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"btp": {
	id: "btp";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"copilot": {
	id: "copilot";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"cpp": {
	id: "cpp";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"csharp": {
	id: "csharp";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"css": {
	id: "css";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"docker": {
	id: "docker";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"electron": {
	id: "electron";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"eslint": {
	id: "eslint";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"fpga": {
	id: "fpga";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"git": {
	id: "git";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"github": {
	id: "github";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"hana": {
	id: "hana";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"hls": {
	id: "hls";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"hls4ml": {
	id: "hls4ml";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"html": {
	id: "html";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"javascript": {
	id: "javascript";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"kotlin": {
	id: "kotlin";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"php": {
	id: "php";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"prettier": {
	id: "prettier";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"python": {
	id: "python";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"pytorch": {
	id: "pytorch";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"react": {
	id: "react";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"reactnative": {
	id: "reactnative";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"redux": {
	id: "redux";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"rust": {
	id: "rust";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"strapi": {
	id: "strapi";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"swift": {
	id: "swift";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"tailwindcss": {
	id: "tailwindcss";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"tensorflow": {
	id: "tensorflow";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"twitchtv": {
	id: "twitchtv";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"typescript": {
	id: "typescript";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"udp": {
	id: "udp";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"unity": {
	id: "unity";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"vercel": {
	id: "vercel";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"vite": {
	id: "vite";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"vitest": {
	id: "vitest";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"vivado": {
	id: "vivado";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
"webpack": {
	id: "webpack";
  collection: "tech";
  data: InferEntrySchema<"tech">
};
};
"work": {
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
