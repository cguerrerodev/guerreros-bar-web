

select a.*, sum(b.quantity) as quantity from gsb_item a left outer join gsb_item_location b on a.id = b.item_id 
where a.id = 1
group by a.id




