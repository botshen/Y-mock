type Log = {
  url: string;
  timestamp: number;
};

type JSONValue = string | number | boolean | null | { [k: string | number]: JSONValue } | JSONValue[]

type Resource<T> = {
  resource: T
}
type Resources<T> = {
  resources: T[]
  pager: {
    page: number
    per_page: number
    count: number
  }
}

type Rule = {
  pathRule: string
  Method?: string
  Delay?: string
  code?: string
  Comments?: string
  switchOn?: boolean
  json?: {
    name: string
    age: number
    isStudent: boolean
  }
}
