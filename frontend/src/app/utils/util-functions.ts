//검색 필터
export function searchFilter<T>(field: string, ...fields: string[]): (item: T, filter: string) => boolean {
  if (fields != null && fields.length > 0) {
      fields.unshift(field);
      return (item: T, filter: string) => {
          return fields.some(field => (item as any)[field].toLowerCase().startsWith(filter.trim().toLowerCase()));
      };
  } else {
      return (item: T, filter: string) => (item as any)[field].toLowerCase().startsWith(filter.trim().toLowerCase());
  }
}
