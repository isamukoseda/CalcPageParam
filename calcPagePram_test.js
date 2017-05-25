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
    it('page=1, per_page=10, total=12 => 1:10:1:12', function(){
        expect(calc_page_param(1, 10, 12)).toBe("1:10:1:12");
    });
    it('page=2, per_page=10, total=12 => 2:10:11:12', function(){
        expect(calc_page_param(2, 10, 12)).toBe("2:10:11:12");
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
    it('page=14, per_page=1, total=12 => 12:1:12:12', function(){
        expect(calc_page_param(14, 1, 12)).toBe("12:1:12:12");
    });
    it('page=-1, per_page=10, total=12 => 1:10:1:12', function(){
        expect(calc_page_param(-1, 10, 12)).toBe("1:10:1:12");
    });
    it('page=0, per_page=10, total=12 => 1:10:1:12', function(){
        expect(calc_page_param(0, 10, 12)).toBe("1:10:1:12");
    });
    it('page=3, per_page=10, total=12 => 2:10:11:12', function(){
        expect(calc_page_param(3, 10, 12)).toBe("2:10:11:12");
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
        expect(calc_page_param(-1, 15, 12)).toBe("1:12:1:12");
    });
    it('page=-2, per_page=15, total=12 => 1:12:1:12', function(){
        expect(calc_page_param(2, 15, 12)).toBe("1:12:1:12");
    });
});

describe('文字列を指定した際のテスト', function() {
    // 全角を指定
    it('page=１, per_page=10, total=15 => 1:10:1:15', function(){
        expect(calc_page_param('１', 10, 15)).toBe("1:10:1:15");
    });
    it('page=１, per_page=10, total=15 => 1:1:1:15', function(){
        expect(calc_page_param(1, '１０', 15)).toBe("1:1:1:15");
    });
    it('page=１, per_page=10, total=15 => 1:1:1:1', function(){
        expect(calc_page_param(1, 10, '１５')).toBe("1:1:1:1");
    });
    // 半角を''で括って（文字列として）指定
    it('page=１, per_page=10, total=15 => 1:10:1:15', function(){
        expect(calc_page_param('1', 10, 15)).toBe("1:10:1:15");
    });
    it('page=１, per_page=10, total=15 => 1:10:1:15', function(){
        expect(calc_page_param(1, '10', 15)).toBe("1:10:1:15");
    });
    it('page=１, per_page=10, total=15 => 1:10:1:15', function(){
        expect(calc_page_param(1, 10, '15')).toBe("1:10:1:15");
    });
    
});
