type Log = {
  pathRule: string;
  timestamp: number;
  timeText: string;
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
  timestamp: number
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
