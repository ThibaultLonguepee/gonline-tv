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

}

