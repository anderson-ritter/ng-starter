export class APIResponse {
  is_succeeded!: boolean;
  messages!: APIResponseMessage[];

  constructor(apiResponse?: Dictionary<any>) {
    if (apiResponse) {
      return Object.assign(this, {
        ...apiResponse,
        messages: Array.getValueOrEmpty<APIResponseMessage>(apiResponse['messages'])
          .truthy()
          .map(message => new APIResponseMessage(message))
      });
    }
  }
}

export class APIDataResponse<T> extends APIResponse {
  data!: T;

  constructor(apiDataResponse?: Dictionary<any>) {
    super();

    if (apiDataResponse) {
      return Object.assign(this, {
        ...apiDataResponse,
        messages: Array.getValueOrEmpty<APIResponseMessage>(apiDataResponse['messages'])
          .truthy()
          .map(message => new APIResponseMessage(message)),
        data: apiDataResponse['data']
      });
    }
  }
}

export class APIResponseMessage {
  code?: string;
  message?: string;
  param?: string;

  constructor(apiResponseMessage?: Dictionary<any>) {
    if (apiResponseMessage) {
      return Object.assign(this, {
        ...apiResponseMessage
      });
    }
  }

  format() {
    let result = '';

    if (!!this.code) {
      result += `${this.code}: `;
    }

    result += this.message?.trimEnd('.');

    if (!!this.param) {
      result += `. (${this.param})`;
    }

    return result;
  }
}

export class APIPagedResponse<T> {
  items!: T[];
  total_count!: number;

  constructor(apiPagedResponse?: Dictionary<any>) {
    if (apiPagedResponse) {
      return Object.assign(this, {
        ...apiPagedResponse,
        total_count: +apiPagedResponse['total_count'],
        items: Array.getValueOrEmpty<T>(apiPagedResponse['items'])
      });
    }
  }
}

export type SortDirection = 'asc' | 'desc';
