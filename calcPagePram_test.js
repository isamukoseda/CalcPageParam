//
// Unit Test Code :: Jasmine
//
// 
describe('正常系のテスト', function() {
    it('page=1, per_page=1, total=12 => 1:1:1:12', function(){
        expect(calc_page_param(1, 1, 12)).toBe("1:1:1:12");
    });
    it('page=2, per_page=1, total=12 => 2:1:2:12', function(){
        expect(calc_page_param(2, 1, 12)).toBe("2:1:2:12");
    });
    it('page=12, per_page=1, total=12 => 12:1:12:12', function(){
        expect(calc_page_param(12, 1, 12)).toBe("12:1:12:12");
    });
});

describe('パラメータ異常のテスト', function() {
    it('page=-1, per_page=1, total=12 => 1:1:1:12', function(){
        expect(calc_page_param(-1, 1, 12)).toBe("1:1:1:12");
    });
    it('page=0, per_page=1, total=12 => 1:1:1:12', function(){
        expect(calc_page_param(0, 1, 12)).toBe("1:1:1:12");
    });
    it('page=13, per_page=1, total=12 => 12:1:12:12', function(){
        expect(calc_page_param(13, 1, 12)).toBe("12:1:12:12");
    });
});

describe('ページ処理のテスト', function() {
    it('page=-1, per_page=12, total=12 => 1:12:1:12', function(){
        expect(calc_page_param(-1, 12, 12)).toBe("1:12:1:12");
    });
    it('page=-2, per_page=12, total=12 => 1:12:1:12', function(){
        expect(calc_page_param(2, 12, 12)).toBe("1:12:1:12");
    });
    it('page=-1, per_page=15, total=12 => 1:12:1:12', function(){
        expect(calc_page_param(1, 15, 12)).toBe("1:12:1:12");
    });
    it('page=-2, per_page=15, total=12 => 1:12:1:12', function(){
        expect(calc_page_param(2, 15, 12)).toBe("1:12:1:12");
    });
});
