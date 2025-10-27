export namespace models {
	
	export class Category {
	    Id: number;
	    Name: string;
	    Parent: number;
	    Children: Category[];
	
	    static createFrom(source: any = {}) {
	        return new Category(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Id = source["Id"];
	        this.Name = source["Name"];
	        this.Parent = source["Parent"];
	        this.Children = this.convertValues(source["Children"], Category);
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class LiveStream {
	    Id: number;
	    Number: number;
	    Name: string;
	    Icon: string;
	    EpgChannel: string;
	    // Go type: time
	    AdditionDate: any;
	    IsAdult: boolean;
	    CategoryId: number;
	
	    static createFrom(source: any = {}) {
	        return new LiveStream(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Id = source["Id"];
	        this.Number = source["Number"];
	        this.Name = source["Name"];
	        this.Icon = source["Icon"];
	        this.EpgChannel = source["EpgChannel"];
	        this.AdditionDate = this.convertValues(source["AdditionDate"], null);
	        this.IsAdult = source["IsAdult"];
	        this.CategoryId = source["CategoryId"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class Vod {
	    Id: number;
	    Number: number;
	    Name: string;
	    Thumbnail: string;
	    Rating: number;
	    // Go type: time
	    AdditionDate: any;
	    IsAdult: boolean;
	    Extension: string;
	    Category: number;
	
	    static createFrom(source: any = {}) {
	        return new Vod(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Id = source["Id"];
	        this.Number = source["Number"];
	        this.Name = source["Name"];
	        this.Thumbnail = source["Thumbnail"];
	        this.Rating = source["Rating"];
	        this.AdditionDate = this.convertValues(source["AdditionDate"], null);
	        this.IsAdult = source["IsAdult"];
	        this.Extension = source["Extension"];
	        this.Category = source["Category"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	export class VodDetails {
	    Id: number;
	    Name: string;
	    OriginalName: string;
	    Plot: string;
	    Genre: string;
	    Cast: string[];
	    Directors: string[];
	    Duration: number;
	    // Go type: time
	    RealeaseDate: any;
	    Country: string;
	    Age: string;
	    MpaaRating: string;
	    Rating: number;
	    RatingCount: number;
	    // Go type: time
	    AdditionDate: any;
	    Cover: string;
	    Backdrops: string[];
	    Bitrate: number;
	    Extension: string;
	    Category: number;
	
	    static createFrom(source: any = {}) {
	        return new VodDetails(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Id = source["Id"];
	        this.Name = source["Name"];
	        this.OriginalName = source["OriginalName"];
	        this.Plot = source["Plot"];
	        this.Genre = source["Genre"];
	        this.Cast = source["Cast"];
	        this.Directors = source["Directors"];
	        this.Duration = source["Duration"];
	        this.RealeaseDate = this.convertValues(source["RealeaseDate"], null);
	        this.Country = source["Country"];
	        this.Age = source["Age"];
	        this.MpaaRating = source["MpaaRating"];
	        this.Rating = source["Rating"];
	        this.RatingCount = source["RatingCount"];
	        this.AdditionDate = this.convertValues(source["AdditionDate"], null);
	        this.Cover = source["Cover"];
	        this.Backdrops = source["Backdrops"];
	        this.Bitrate = source["Bitrate"];
	        this.Extension = source["Extension"];
	        this.Category = source["Category"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice && a.map) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

